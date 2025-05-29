import { Starship } from "../models/Starship";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class StarshipService extends BaseStarWappService<Starship> {
  constructor() {
    const httpClient = new HttpClient();
    super(httpClient, 'starships', Starship);
  }
}