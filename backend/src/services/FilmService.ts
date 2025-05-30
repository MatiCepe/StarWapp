import { Injectable } from '@nestjs/common';
import { FilmDto } from 'src/dtos/FilmDTO';
import { BaseStarWarsService } from './BaseStarWarsService';
import { HttpClient } from './HttpClient';
import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';
import { FullFilmDto } from 'src/dtos/FullFilmDTO';
import { PeopleService } from './PeopleService';
import { PlanetService } from './PlanetService';
import { StarshipService } from './StarshipService';

@Injectable()
export class FilmService extends BaseStarWarsService<FilmDto> {
  protected override cacheKey = 'starwars:films';
  constructor(
    protected readonly httpClient: HttpClient,
    protected override cache: OnMemoryCacheService,
  ) {
    super(httpClient, 'films', FilmDto, cache);
  }

  //This method retrieves a full Film object by its ID (URL).
  // It fetches all related data such as characters, starships, and planets.
  //The data fetched uses getAll since it's cached in the BaseStarWarsService
  public async getFullById(id: number): Promise<FullFilmDto> {
    const allFilms: FilmDto[] = await this.getAll();
    const peopleService = new PeopleService(this.httpClient, this.cache);
    const starshipService = new StarshipService(this.httpClient, this.cache);
    const planetService = new PlanetService(this.httpClient, this.cache);

    const allChars = await peopleService.getAll();
    const allStarships = await starshipService.getAll();
    const allPlanets = await planetService.getAll();

    const film = allFilms.find((film) => film.episode_id === id);
    if (!film) throw new Error('Film not found');

    const fullFilm: FullFilmDto = {
      ...film,
      characters: allChars.filter((char) => film.characters.includes(char.url)),
      starships: allStarships.filter((starship) =>
        film.starships.includes(starship.url),
      ),
      planets: allPlanets.filter((planet) => film.planets.includes(planet.url)),
    };

    return fullFilm;
  }
}
