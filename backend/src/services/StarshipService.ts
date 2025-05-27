import { Injectable } from '@nestjs/common';
import { StarshipDto } from 'src/dtos/StarshipDTO';
import { BaseStarWarsService } from './BaseStarWarsService';
import { HttpClient } from './HttpClient';

@Injectable()
export class StarhipServiceService extends BaseStarWarsService<StarshipDto> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'starships', StarshipDto);
  }
}
