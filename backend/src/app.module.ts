import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleService } from './services/PeopleService';
import { PeopleController } from './controllers/PeopleController';
import { HttpClient } from './services/HttpClient';
import { PlanetService } from './services/PlanetService';
import { FilmService } from './services/FilmService';
import { StarhipService } from './services/StarshipService';
import { FilmsController } from './controllers/FilmsController';
import { PlanetController } from './controllers/PlanetController';
import { StarshipController } from './controllers/StarshipController';
import { OnMemoryCacheService } from './cache/OnMemoryCacheService';

@Module({
  imports: [],
  controllers: [
    AppController,
    PeopleController,
    FilmsController,
    PlanetController,
    StarshipController,
  ],
  providers: [
    AppService,
    PeopleService,
    HttpClient,
    PlanetService,
    FilmService,
    StarhipService,
    OnMemoryCacheService,
  ],
})
export class AppModule { }
