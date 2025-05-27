import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { StarshipDto } from 'src/dtos/StarshipDTO';
import { HttpClientService } from './http-client.service';

@Injectable()
export class StarWarsStarhipServiceService {
  constructor(private readonly httpClient: HttpClientService) {}

  async getAllStarships(): Promise<StarshipDto[]> {
    const res = await this.httpClient.get(`/starships`);

    const starshipData = Array.isArray(res) ? res : [];

    const starhips = plainToInstance(StarshipDto, starshipData);

    for (const starhip of starhips) {
      try {
        await validateOrReject(starhip);
      } catch (err) {
        console.error('Validation failed for starhip:', starhip?.name, err);
      }
    }
    return starhips;
  }

  async getStarshipById(id: number): Promise<StarshipDto> {
    const res = await this.httpClient.get<StarshipDto>(`/starships/${id}`);

    return res;
  }
}
