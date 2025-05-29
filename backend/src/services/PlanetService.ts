import { Injectable } from '@nestjs/common';
import { PlanetDto } from 'src/dtos/PlanetDTO';
import { BaseStarWarsService } from './BaseStarWarsService';
import { HttpClient } from './HttpClient';
import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';

@Injectable()
export class PlanetService extends BaseStarWarsService<PlanetDto> {
  protected override cacheKey = 'starwars:planets';
  constructor(
    httpClient: HttpClient,
    protected override cache: OnMemoryCacheService,
  ) {
    super(httpClient, 'planets', PlanetDto, cache);
  }
  ç;
}
