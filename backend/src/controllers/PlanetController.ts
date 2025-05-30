import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PlanetDto } from 'src/dtos/PlanetDTO';
import { PlanetService } from 'src/services/PlanetService';
import { BaseController } from './BaseController';
import { FullFilmDto } from 'src/dtos/FullFilmDTO';
import { FullPlanetDTO } from 'src/dtos/FullPlanetDTO';
import { FullPeopleDto } from 'src/dtos/FullPeopleDTO';

@Controller('planets')
export class PlanetController extends BaseController<PlanetDto> {
  constructor(private readonly planetsService: PlanetService) {
    super(planetsService);
  }

  @Get('full/:id')
  getFullById(@Param('id') id: string): Promise<FullPlanetDTO> {
    const decodedId = decodeURIComponent(id);
    return this.planetsService.getFullById(decodedId);
  }
}
