import { PeopleDto } from "../dtos/PeopleDTO";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class PeopleService extends BaseStarWappService<PeopleDto> {
    constructor() {
      const httpClient = new HttpClient();
      super(httpClient, 'people', PeopleDto);
    }
  }