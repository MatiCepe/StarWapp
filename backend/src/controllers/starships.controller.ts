import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StarshipDto } from 'src/dtos/StarshipDTO';
import { StarWarsStarhipServiceService } from 'src/services/star-wars-starhip-service.service';

@Controller('starships')
export class StarshipsController {
  constructor(
    private readonly starshipsService: StarWarsStarhipServiceService,
  ) {}

  @Get()
  async getAll(): Promise<StarshipDto[]> {
    return this.starshipsService.getAllStarships();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<StarshipDto> {
    return this.starshipsService.getStarshipById(id);
  }
}
