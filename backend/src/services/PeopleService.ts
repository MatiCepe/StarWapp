import { Injectable } from '@nestjs/common';
import { PeopleDto } from 'src/dtos/PeopleDTO';
import { BaseStarWarsService } from './BaseStarWarsService';
import { HttpClient } from './HttpClient';
import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';

@Injectable()
export class PeopleService extends BaseStarWarsService<PeopleDto> {
  protected override cacheKey = 'starwars:people';
  constructor(
    httpClient: HttpClient,
    protected override cache: OnMemoryCacheService,
  ) {
    super(httpClient, 'people', PeopleDto, cache);
  }
}
