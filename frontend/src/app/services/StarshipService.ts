import { Starship } from "../models/Starship";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class StarshipService extends BaseStarWappService<Starship> {
  constructor() {
    const httpClient = new HttpClient();
    super(httpClient, 'starships', Starship);
  }

  async getFullStarship(id: string): Promise<FullStarshipDTO> {
    const encodedId = encodeURIComponent(id);
    const response = await this.httpClient.get<FullStarshipDTO>(`/starships/full/${encodedId}`);
    if (!response) {
      throw new Error('Error fetching Starship');
    }
    return response;
  }
}