import { Planet } from "../models/Planet";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class PlanetService extends BaseStarWappService<Planet> {
  constructor() {
    const httpClient = new HttpClient();
    super(httpClient, 'planets', Planet);
  }
}