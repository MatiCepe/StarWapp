import { StarshipDto } from 'src/dtos/StarshipDTO';
import { StarhipService } from 'src/services/StarshipService';
import { BaseController } from './BaseController';
import { Controller } from '@nestjs/common';
@Controller('starships')
export class StarshipController extends BaseController<StarshipDto> {
  constructor(private readonly starshipsService: StarhipService) {
    super(starshipsService);
  }
}
