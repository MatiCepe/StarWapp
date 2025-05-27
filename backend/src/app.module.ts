import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleService } from './services/PeopleService';
import { PeopleController } from './controllers/PeopleController';
import { HttpClient } from './services/HttpClient';
import { PlanetsService } from './services/PlanetService';
import { FilmsService } from './services/FilmsService';
import { StarhipServiceService } from './services/StarshipService';
import { FilmsController } from './controllers/FilmsController';
import { PlanetsController } from './controllers/PlanetsController';
import { StarshipsController } from './controllers/StarshipsController';

@Module({
  imports: [],
  controllers: [
    AppController,
    PeopleController,
    FilmsController,
    PlanetsController,
    StarshipsController,
  ],
  providers: [
    AppService,
    PeopleService,
    HttpClient,
    PlanetsService,
    FilmsService,
    StarhipServiceService,
  ],
})
export class AppModule {}
