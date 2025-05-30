import { Planet } from "../models/Planet";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class PlanetService extends BaseStarWappService<Planet> {
  constructor() {
    const httpClient = new HttpClient();
    super(httpClient, 'planets', Planet);
  }

  async getFullPlanet(id: string): Promise<FullPlanetDTO> {
    const encodedId = encodeURIComponent(id);
    const response = await this.httpClient.get<FullPlanetDTO>(`/planets/full/${encodedId}`);
    if (!response) {
      throw new Error('Error fetching Planet');
    }
    return response;
  }
}