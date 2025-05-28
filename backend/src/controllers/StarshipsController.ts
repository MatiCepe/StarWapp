import { StarshipDto } from 'src/dtos/StarshipDTO';
import { StarhipServiceService } from 'src/services/StarshipService';
import { BaseController } from './BaseController';
import { Controller } from '@nestjs/common';
@Controller('starships')
export class StarshipsController extends BaseController<StarshipDto> {
  constructor(private readonly starshipsService: StarhipServiceService) {
    super(starshipsService);
  }
}
