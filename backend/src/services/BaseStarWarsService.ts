import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { HttpClient } from './HttpClient';
import { OnModuleInit } from '@nestjs/common';
import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';

export abstract class BaseStarWarsService<T extends object>
  implements OnModuleInit {
  protected abstract cacheKey: string;

  constructor(
    protected readonly httpClient: HttpClient,
    private readonly basePath: string,
    private readonly dtoClass: new (...args: any[]) => T,
    protected cache: OnMemoryCacheService,
  ) { }

  async onModuleInit() {
    const data = this.cache.get(this.cacheKey);
    if (!data) {
      await this.loadAndCacheAll();
    }
  }

  protected async loadAndCacheAll(): Promise<void> {
    const response = await this.fetchAllFromApi();
    this.cache.set(this.cacheKey, response);
  }

  protected async getCachedData<T>(): Promise<T[]> {
    let data = this.cache.get<T[]>(this.cacheKey);
    if (!data) {
      await this.loadAndCacheAll();
      data = this.cache.get<T[]>(this.cacheKey);
    }
    return data!;
  }

  async getAll(): Promise<T[]> {
    return this.getCachedData();
  }

  async fetchAllFromApi(): Promise<T[]> {
    const res = await this.httpClient.get<any[]>(`/${this.basePath}`);
    const data = Array.isArray(res) ? res : [];
    const instances = plainToInstance(this.dtoClass, data);

    for (const item of instances) {
      try {
        await validateOrReject(item);
      } catch (err) {
        console.error(`Validation failed for ${this.basePath} item:`, err);
      }
    }

    return instances;
  }

  async getById(id: number): Promise<T> {
    const res = await this.httpClient.get<T>(`/${this.basePath}/${id}`);
    return res;
  }
}
