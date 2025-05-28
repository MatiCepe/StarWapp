import { PeopleDto } from "../dtos/PeopleDTO";
import { PlanetDTO } from "../dtos/PlanetDTO";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class PlanetService extends BaseStarWappService<PlanetDTO> {
    constructor() {
      const httpClient = new HttpClient();
      super(httpClient, 'planets', PlanetDTO);
    }
  }