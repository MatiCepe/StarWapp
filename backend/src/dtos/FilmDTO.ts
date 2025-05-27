import { IsString, IsInt, IsDateString, IsArray, IsUrl } from 'class-validator';

export class FilmDto {
  @IsString()
  title: string;

  @IsInt()
  episode_id: number;

  @IsString()
  opening_crawl: string;

  @IsString()
  director: string;

  @IsString()
  producer: string;

  @IsDateString()
  release_date: string;

  @IsArray()
  @IsUrl({}, { each: true })
  characters: string[];

  @IsArray()
  @IsUrl({}, { each: true })
  planets: string[];

  @IsArray()
  @IsUrl({}, { each: true })
  starships: string[];

  @IsArray()
  @IsUrl({}, { each: true })
  vehicles: string[];

  @IsArray()
  @IsUrl({}, { each: true })
  species: string[];

  @IsDateString()
  created: string;

  @IsDateString()
  edited: string;

  @IsUrl()
  url: string;
}
