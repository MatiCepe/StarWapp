import { Injectable } from '@nestjs/common';
import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';
import { FullPeopleDto } from 'src/dtos/FullPeopleDTO';
import { PeopleDto } from 'src/dtos/PeopleDTO';
import { BaseStarWarsService } from './BaseStarWarsService';
import { FilmService } from './FilmService';
import { HttpClient } from './HttpClient';
import { PlanetService } from './PlanetService';
import { StarshipService } from './StarshipService';

@Injectable()
export class PeopleService extends BaseStarWarsService<PeopleDto> {
  protected override cacheKey = 'starwars:people';
  constructor(
    httpClient: HttpClient,
    protected override cache: OnMemoryCacheService,
  ) {
    super(httpClient, 'people', PeopleDto, cache);
  }

  //This method retrieves a full character object by its ID (URL).
  // It fetches all related data such as films, starships, and homeworld.
  //The data fetched uses getAll since it's cached in the BaseStarWarsService
  public async getFullById(id: string): Promise<FullPeopleDto> {
    const allPeople: PeopleDto[] = await this.getAll();

    const starshipService = new StarshipService(this.httpClient, this.cache);
    const planetService = new PlanetService(this.httpClient, this.cache);
    const filmsService = new FilmService(this.httpClient, this.cache);

    const allStarships = await starshipService.getAll();
    const allPlanets = await planetService.getAll();
    const allFilms = await filmsService.getAll();

    const person = allPeople.find((p) => p.url === id);
    if (!person) throw new Error('Person not found');

    const fullChar: FullPeopleDto = {
      ...person,
      films: allFilms.filter((film) => person.films.includes(film.url)),
      starships: allStarships.filter((starship) =>
        person.starships.includes(starship.url),
      ),
      homeworld:
        allPlanets.find((planet) => person.homeworld === planet.url) ||
        undefined,
    };

    return fullChar;
  }
}
