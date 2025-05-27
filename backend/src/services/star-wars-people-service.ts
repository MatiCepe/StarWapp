/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { PeopleDto } from 'src/dtos/PeopleDTO';
import { HttpClientService } from './http-client.service';
import { PeopleApiResponse } from 'src/dtos/PeopleApiResponse';

@Injectable()
export class StarWarsPeopleService {
  constructor(private readonly httpClient: HttpClientService) {}

  async getAllPeople(): Promise<PeopleDto[]> {
    const res = await this.httpClient.get<PeopleApiResponse>(`/people`);

    const peopleData = Array.isArray(res) ? res : [];

    const people = plainToInstance(PeopleDto, peopleData);

    for (const person of people) {
      try {
        await validateOrReject(person);
      } catch (err) {
        console.error('Validation failed for person:', person?.name, err);
      }
    }
    return people;
  }

  async getPeopleById(id: number): Promise<PeopleDto> {
    const res = await this.httpClient.get<PeopleDto>(`/people/${id}`);

    return res;
  }
}
