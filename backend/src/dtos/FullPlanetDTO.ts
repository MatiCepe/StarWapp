import { FilmDto } from './FilmDTO';
import { PeopleDto } from './PeopleDTO';

export class FullPlanetDTO {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: PeopleDto[];
  films: FilmDto[];
  created: string;
  edited: string;
  url: string;
}
