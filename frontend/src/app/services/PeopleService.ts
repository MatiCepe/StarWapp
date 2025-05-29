import { People } from "../models/People";
import { BaseStarWappService } from "./BaseStarWappService";
import { HttpClient } from "./HttpClient";

export class PeopleService extends BaseStarWappService<People> {
  constructor() {
    const httpClient = new HttpClient();
    super(httpClient, 'people', People);
  }
}