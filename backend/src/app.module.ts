import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarWarsPeopleService } from './services/star-wars-people-service';
import { PeopleController } from './controllers/people.controller';
import { HttpClientService } from './services/http-client.service';
import { StarWarsPlanetsServiceService } from './services/star-wars-planet-service.service';
import { StarWarsFilmsServiceService } from './services/star-wars-film-service.service';
import { StarWarsStarhipServiceService } from './services/star-wars-starhip-service.service';

@Module({
  imports: [],
  controllers: [AppController, PeopleController],
  providers: [AppService, StarWarsPeopleService, HttpClientService, StarWarsPlanetsServiceService, StarWarsFilmsServiceService, StarWarsStarhipServiceService],
})
export class AppModule {}
