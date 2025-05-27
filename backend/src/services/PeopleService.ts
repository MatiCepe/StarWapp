import { Injectable } from '@nestjs/common';
import { PeopleDto } from 'src/dtos/PeopleDTO';
import { BaseStarWarsService } from './BaseStarWarsService';
import { HttpClient } from './HttpClient';

@Injectable()
export class PeopleService extends BaseStarWarsService<PeopleDto> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'people', PeopleDto);
  }
}
