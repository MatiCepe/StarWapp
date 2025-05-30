import { Injectable } from '@nestjs/common';
import { StarshipDto } from 'src/dtos/StarshipDTO';
import { BaseStarWarsService } from './BaseStarWarsService';
import { HttpClient } from './HttpClient';
import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';
import { FullPlanetDTO } from 'src/dtos/FullPlanetDTO';
import { PlanetDto } from 'src/dtos/PlanetDTO';
import { FilmService } from './FilmService';
import { PeopleService } from './PeopleService';
import { FullStarshipDTO } from 'src/dtos/FullStarshipDTO';

@Injectable()
export class StarshipService extends BaseStarWarsService<StarshipDto> {
  protected override cacheKey = 'starwars:starships';
  constructor(
    httpClient: HttpClient,
    protected override cache: OnMemoryCacheService,
  ) {
    super(httpClient, 'starships', StarshipDto, cache);
  }

  public async getFullById(id: string): Promise<FullStarshipDTO> {
    const allStarships: StarshipDto[] = await this.getAll();

    const filmsService = new FilmService(this.httpClient, this.cache);
    const peopleService = new PeopleService(this.httpClient, this.cache);

    const allFilms = await filmsService.getAll();
    const allPeople = await peopleService.getAll();

    const starship = allStarships.find((p) => p.url === id);
    if (!starship) throw new Error('Starship not found');

    const fullStarship: FullStarshipDTO = {
      ...starship,
      films: allFilms.filter((film) => starship.films.includes(film.url)),
      pilots: allPeople.filter((pilot) => starship.pilots.includes(pilot.url)),
    };

    return fullStarship;
  }
}
