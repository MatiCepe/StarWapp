import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { PeopleApiResponse } from 'src/dtos/PeopleApiResponse';
import { PeopleDto } from 'src/dtos/PeopleDTO';
import { HttpClientService } from './http-client.service';
import { PlanetDto } from 'src/dtos/PlanetDTO';

@Injectable()
export class StarWarsPlanetsServiceService {
  constructor(private readonly httpClient: HttpClientService) {}

  async getAllPlanets(): Promise<PlanetDto[]> {
    const res = await this.httpClient.get(`/planets`);

    const planetsData = Array.isArray(res) ? res : [];

    const planets = plainToInstance(PlanetDto, planetsData);

    for (const planet of planets) {
      try {
        await validateOrReject(planet);
      } catch (err) {
        console.error('Validation failed for person:', planet?.name, err);
      }
    }
    return planets;
  }

  async getPlanetById(id: number): Promise<PlanetDto> {
    const res = await this.httpClient.get<PlanetDto>(`/planets/${id}`);

    return res;
  }
}
