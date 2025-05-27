import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarWarsPeopleService } from './services/star-wars-people-service';
import { StarWarsApiController } from './controllers/star-wars-api.controller';
import { HttpClientService } from './services/http-client.service';
import { StarWarsPlanetsServiceService } from './services/star-wars-planet-service.service';
import { StarWarsFilmsServiceService } from './star-wars-films-service/star-wars-film-service.service';
import { StarWarsStarhipServiceService } from './star-wars-starhip-service/star-wars-starhip-service.service';

@Module({
  imports: [],
  controllers: [AppController, StarWarsApiController],
  providers: [AppService, StarWarsPeopleService, HttpClientService, StarWarsPlanetsServiceService, StarWarsFilmsServiceService, StarWarsStarhipServiceService],
})
export class AppModule {}
