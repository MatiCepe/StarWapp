import { StarshipDTO } from "../dtos/StarshipDTO";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class StarshipService extends BaseStarWappService<StarshipDTO> {
    constructor() {
      const httpClient = new HttpClient();
      super(httpClient, 'starships', StarshipDTO);
    }
  }