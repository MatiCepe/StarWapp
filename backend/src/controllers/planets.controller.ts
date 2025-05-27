import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PlanetDto } from 'src/dtos/PlanetDTO';
import { StarWarsPlanetsServiceService } from 'src/services/star-wars-planet-service.service';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: StarWarsPlanetsServiceService) {}

  @Get()
  async getPeople(): Promise<PlanetDto[]> {
    return this.planetsService.getAllPlanets();
  }

  @Get(':id')
  async getIndPeople(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PlanetDto> {
    return this.planetsService.getPlanetById(id);
  }
}
