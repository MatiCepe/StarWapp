import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PeopleDto } from 'src/dtos/PeopleDTO';
import { StarWarsPeopleService } from 'src/services/star-wars-people-service';

@Controller('people')
export class PeopleController {
  constructor(private readonly starwarsService: StarWarsPeopleService) {}

  @Get()
  async getPeople(): Promise<PeopleDto[]> {
    return this.starwarsService.getAllPeople();
  }

  @Get(':id')
  async getIndPeople(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PeopleDto> {
    return this.starwarsService.getPeopleById(id);
  }
}
