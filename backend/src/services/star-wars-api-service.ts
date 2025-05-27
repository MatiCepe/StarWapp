/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { PeopleDto } from 'src/dtos/PeopleDTO';

interface PeopleApiResponse {
  status: number;
  data: PeopleDto[];
}

@Injectable()
export class StarWarsApiService {
  private readonly BASE_URL = 'https://swapi.info/api';

  async getPeople(): Promise<PeopleDto[]> {
    const res = await axios.get<PeopleApiResponse>(`${this.BASE_URL}/people`);

    const peopleData = Array.isArray(res?.data) ? res.data : [];

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

  async getIndPeople(id: number): Promise<PeopleDto> {
    const res = await axios.get<PeopleDto>(`${this.BASE_URL}/people/${id}`);

    return res.data;
  }
}
