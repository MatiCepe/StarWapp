import { FilmDto } from './FilmDTO';
import { PlanetDto } from './PlanetDTO';
import { StarshipDto } from './StarshipDTO';

export class FullPeopleDto {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld?: PlanetDto;
  films: FilmDto[];
  species: string[];
  vehicles: string[];
  starships: StarshipDto[];
  created: string;
  edited: string;
  url: string;
}
