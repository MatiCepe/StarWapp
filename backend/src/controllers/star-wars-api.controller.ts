import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PeopleDto } from 'src/dtos/PeopleDTO';
import { StarWarsPeopleService } from 'src/services/star-wars-people-service';

@Controller('star-wapp-api')
export class StarWarsApiController {
  constructor(private readonly starwarsService: StarWarsPeopleService) {}

  @Get('people')
  async getPeople(): Promise<PeopleDto[]> {
    return this.starwarsService.getPeople();
  }

  @Get('people/:id')
  async getIndPeople(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PeopleDto> {
    return this.starwarsService.getIndPeople(id);
  }
}
