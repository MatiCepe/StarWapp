import { People } from "../models/People";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class PeopleService extends BaseStarWappService<People> {
  constructor() {
    const httpClient = new HttpClient();
    super(httpClient, 'people', People);
  }

  async getFullChar(id: string): Promise<FullPeopleDto> {
    const encodedId = encodeURIComponent(id);
    const response = await this.httpClient.get<FullPeopleDto>(`/people/full/${encodedId}`);
    if (!response) {
      throw new Error('Error fetching Char');
    }
    return response;
  }
}