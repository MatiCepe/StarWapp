import { PeopleDto } from './PeopleDTO';

export interface PeopleApiResponse {
  status: number;
  data: PeopleDto[];
}
