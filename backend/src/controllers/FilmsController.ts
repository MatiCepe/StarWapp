import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FilmDto } from 'src/dtos/FilmDTO';
import { FilmService } from 'src/services/FilmService';
import { BaseController } from './BaseController';
import { FullFilmDto } from 'src/dtos/FullFilmDTO';

@Controller('films')
export class FilmsController extends BaseController<FilmDto> {
  constructor(private readonly filmSertvice: FilmService) {
    super(filmSertvice);
  }

  @Get('full/:id')
  getFullById(@Param('id', ParseIntPipe) id: number): Promise<FullFilmDto> {
    return this.filmSertvice.getFullById(id);
  }
}
