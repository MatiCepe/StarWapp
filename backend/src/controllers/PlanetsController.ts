import { Controller } from '@nestjs/common';
import { PlanetDto } from 'src/dtos/PlanetDTO';
import { PlanetsService } from 'src/services/PlanetService';
import { BaseController } from './BaseController';

@Controller('planets')
export class PlanetsController extends BaseController<PlanetDto> {
  constructor(private readonly planetsService: PlanetsService) {
    super(planetsService);
  }
}
