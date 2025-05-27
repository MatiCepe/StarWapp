import { IsString, IsArray, IsUrl, IsDateString } from 'class-validator';

export class StarshipDto {
  @IsString()
  name: string;

  @IsString()
  model: string;

  @IsString()
  manufacturer: string;

  @IsString()
  cost_in_credits: string;

  @IsString()
  length: string;

  @IsString()
  max_atmosphering_speed: string;

  @IsString()
  crew: string;

  @IsString()
  passengers: string;

  @IsString()
  cargo_capacity: string;

  @IsString()
  consumables: string;

  @IsString()
  hyperdrive_rating: string;

  @IsString()
  MGLT: string;

  @IsString()
  starship_class: string;

  @IsArray()
  @IsUrl({}, { each: true })
  pilots: string[];

  @IsArray()
  @IsUrl({}, { each: true })
  films: string[];

  @IsDateString()
  created: string;

  @IsDateString()
  edited: string;

  @IsUrl()
  url: string;
}
