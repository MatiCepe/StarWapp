import { FilmDto } from './FilmDTO';
import { PeopleDto } from './PeopleDTO';

export class FullStarshipDTO {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: PeopleDto[];
  films: FilmDto[];
  created: string;
  edited: string;
  url: string;
}
