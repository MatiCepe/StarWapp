import { plainToInstance } from 'class-transformer';
import { HttpClient } from './HttpClient';

export abstract class BaseStarWappService<T extends object> {
  constructor(
    protected readonly httpClient: HttpClient,
    private readonly basePath: string,
    private readonly dtoClass: new (...args: any[]) => T,
  ) {}

  async getAll(): Promise<T[]> {
    const res = await this.httpClient.get<any[]>(`/${this.basePath}`);
    return plainToInstance(this.dtoClass, res ?? []);
  }

  async getById(id: number): Promise<T> {
    const res = await this.httpClient.get<T>(`/${this.basePath}/${id}`);
    return plainToInstance(this.dtoClass, res);
  }
}