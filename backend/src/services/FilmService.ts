import { Injectable } from '@nestjs/common';
import { FilmDto } from 'src/dtos/FilmDTO';
import { BaseStarWarsService } from './BaseStarWarsService';
import { HttpClient } from './HttpClient';
import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';

@Injectable()
export class FilmService extends BaseStarWarsService<FilmDto> {
  protected override cacheKey = 'starwars:films';
  constructor(
    httpClient: HttpClient,
    protected override cache: OnMemoryCacheService,
  ) {
    super(httpClient, 'films', FilmDto, cache);
  }
}
