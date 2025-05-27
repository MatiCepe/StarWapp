import { Get, Param, ParseIntPipe } from '@nestjs/common';

export abstract class BaseController<T> {
  constructor(
    private readonly service: {
      getAll(): Promise<T[]>;
      getById(id: number): Promise<T>;
    },
  ) {}

  @Get()
  async getAll(): Promise<T[]> {
    return this.service.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<T> {
    return this.service.getById(id);
  }
}