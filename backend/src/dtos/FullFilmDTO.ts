import { FilmDto } from './FilmDTO';
import { PeopleDto } from './PeopleDTO';
import { PlanetDto } from './PlanetDTO';
import { StarshipDto } from './StarshipDTO';

export class FullFilmDto {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: PeopleDto[];
  planets: PlanetDto[];
  starships: StarshipDto[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}
