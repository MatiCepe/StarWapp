/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsUrl, IsArray } from 'class-validator';

export class PeopleDto {
  @IsString()
  name!: string;

  @IsString()
  height!: string;

  @IsString()
  mass!: string;

  @IsString()
  hair_color!: string;

  @IsString()
  skin_color!: string;

  @IsString()
  eye_color!: string;

  @IsString()
  birth_year!: string;

  @IsString()
  gender!: string;

  @IsUrl()
  homeworld!: string;

  @IsArray()
  @IsUrl({}, { each: true })
  films!: string[];

  @IsArray()
  @IsUrl({}, { each: true })
  species!: string[];

  @IsArray()
  @IsUrl({}, { each: true })
  vehicles!: string[];

  @IsArray()
  @IsUrl({}, { each: true })
  starships!: string[];

  @IsString()
  created!: string;

  @IsString()
  edited!: string;

  @IsUrl()
  url!: string;
}
