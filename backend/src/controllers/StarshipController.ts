import { Controller, Get, Param } from '@nestjs/common';
import { FullStarshipDTO } from 'src/dtos/FullStarshipDTO';
import { StarshipDto } from 'src/dtos/StarshipDTO';
import { StarshipService } from 'src/services/StarshipService';
import { BaseController } from './BaseController';
@Controller('starships')
export class StarshipController extends BaseController<StarshipDto> {
  constructor(private readonly starshipsService: StarshipService) {
    super(starshipsService);
  }

  @Get('full/:id')
  getFullById(@Param('id') id: string): Promise<FullStarshipDTO> {
    const decodedId = decodeURIComponent(id);
    return this.starshipsService.getFullById(decodedId);
  }
}
