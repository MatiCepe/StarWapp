import { Film } from "../models/Film";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class FilmsService extends BaseStarWappService<Film> {
    constructor() {
      const httpClient = new HttpClient();
        super(httpClient, 'films', Film);
    }
  }