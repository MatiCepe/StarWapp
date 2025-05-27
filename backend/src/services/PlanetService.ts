import { Injectable } from '@nestjs/common';
import { PlanetDto } from 'src/dtos/PlanetDTO';
import { BaseStarWarsService } from './BaseStarWarsService';
import { HttpClient } from './HttpClient';

@Injectable()
export class PlanetsService extends BaseStarWarsService<PlanetDto> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'planets', PlanetDto);
  }
  ç;
}
