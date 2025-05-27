import { IsString, IsArray, IsUrl, IsDateString } from 'class-validator';

export class PlanetDto {
  @IsString()
  name: string;

  @IsString()
  rotation_period: string;

  @IsString()
  orbital_period: string;

  @IsString()
  diameter: string;

  @IsString()
  climate: string;

  @IsString()
  gravity: string;

  @IsString()
  terrain: string;

  @IsString()
  surface_water: string;

  @IsString()
  population: string;

  @IsArray()
  @IsUrl({}, { each: true })
  residents: string[];

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
