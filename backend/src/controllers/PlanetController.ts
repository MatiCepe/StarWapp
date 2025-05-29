import { Controller } from '@nestjs/common';
import { PlanetDto } from 'src/dtos/PlanetDTO';
import { PlanetService } from 'src/services/PlanetService';
import { BaseController } from './BaseController';

@Controller('planets')
export class PlanetController extends BaseController<PlanetDto> {
  constructor(private readonly planetsService: PlanetService) {
    super(planetsService);
  }
}
