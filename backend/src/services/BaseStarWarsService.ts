import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { HttpClient } from './HttpClient';

export abstract class BaseStarWarsService<T extends object> {
  constructor(
    protected readonly httpClient: HttpClient,
    private readonly basePath: string,
    private readonly dtoClass: new (...args: any[]) => T,
  ) {}

  async getAll(): Promise<T[]> {
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
