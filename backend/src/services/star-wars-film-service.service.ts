import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { FilmDto } from 'src/dtos/FilmDTO';
import { HttpClientService } from './http-client.service';

@Injectable()
export class StarWarsFilmsServiceService {
  constructor(private readonly httpClient: HttpClientService) {}

  async getAllFilms(): Promise<FilmDto[]> {
    const res = await this.httpClient.get(`/films/`);

    const filmData = Array.isArray(res) ? res : [];

    const films = plainToInstance(FilmDto, filmData);
    for (const film of films) {
      try {
        await validateOrReject(film);
      } catch (err) {
        console.error('Validation failed for film:', film?.title, err);
      }
    }
    return films;
  }

  async getFilm(id: number): Promise<FilmDto> {
    const res = await this.httpClient.get<FilmDto>(`/films/${id}`);

    return res;
  }
}
