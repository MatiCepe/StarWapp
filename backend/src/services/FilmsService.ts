import { Injectable } from '@nestjs/common';
import { FilmDto } from 'src/dtos/FilmDTO';
import { BaseStarWarsService } from './BaseStarWarsService';
import { HttpClient } from './HttpClient';

@Injectable()
export class FilmsService extends BaseStarWarsService<FilmDto> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'films', FilmDto);
  }
}
