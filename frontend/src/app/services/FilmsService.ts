import { Film } from "../models/Film";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class FilmsService extends BaseStarWappService<Film> {
  constructor() {
    const httpClient = new HttpClient();
    super(httpClient, 'films', Film);
  }

  async getFullFilm(id: number): Promise<FullFilmDto> {
    const response = await this.httpClient.get<FullFilmDto>(`/films/full/${id}`);
    if (!response) {
      throw new Error('Error fetching film');
    }
    return response;
  }
}