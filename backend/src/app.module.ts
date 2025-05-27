import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarWarsApiService } from './services/star-wars-api-service';
import { StarWarsApiController } from './controllers/star-wars-api.controller';

@Module({
  imports: [],
  controllers: [AppController, StarWarsApiController],
  providers: [AppService, StarWarsApiService],
})
export class AppModule {}
