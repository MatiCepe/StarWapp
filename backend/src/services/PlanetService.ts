import { Injectable } from '@nestjs/common';
import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';
import { FullPlanetDTO } from 'src/dtos/FullPlanetDTO';
import { PlanetDto } from 'src/dtos/PlanetDTO';
import { BaseStarWarsService } from './BaseStarWarsService';
import { FilmService } from './FilmService';
import { HttpClient } from './HttpClient';
import { StarshipService } from './StarshipService';
import { PeopleService } from './PeopleService';

@Injectable()
export class PlanetService extends BaseStarWarsService<PlanetDto> {
  protected override cacheKey = 'starwars:planets';
  constructor(
    httpClient: HttpClient,
    protected override cache: OnMemoryCacheService,
  ) {
    super(httpClient, 'planets', PlanetDto, cache);
  }

  //This method retrieves a full Planet object by its ID (URL).
  // It fetches all related data such as films and residents.
  //The data fetched uses getAll since it's cached in the BaseStarWarsService
  public async getFullById(id: string): Promise<FullPlanetDTO> {
    const allPlanets: PlanetDto[] = await this.getAll();

    const filmsService = new FilmService(this.httpClient, this.cache);
    const peopleService = new PeopleService(this.httpClient, this.cache);

    const allFilms = await filmsService.getAll();
    const allPeople = await peopleService.getAll();

    const planet = allPlanets.find((p) => p.url === id);
    if (!planet) throw new Error('Planet not found');

    const fullPlanet: FullPlanetDTO = {
      ...planet,
      films: allFilms.filter((film) => planet.films.includes(film.url)),
      residents: allPeople.filter((resident) =>
        planet.residents.includes(resident.url),
      ),
    };

    return fullPlanet;
  }
}
