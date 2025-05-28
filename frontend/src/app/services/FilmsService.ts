import { FilmDTO } from "../dtos/FilmDTO";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class FilmsService extends BaseStarWappService<FilmDTO> {
    constructor() {
      const httpClient = new HttpClient();
        super(httpClient, 'films', FilmDTO);
    }
  }