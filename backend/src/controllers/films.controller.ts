import { Controller, Get } from '@nestjs/common';
import { FilmDto } from 'src/dtos/FilmDTO';
import { StarWarsFilmsServiceService } from 'src/services/star-wars-film-service.service';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: StarWarsFilmsServiceService) {}

  @Get()
  async getAllFilms(): Promise<FilmDto[]> {
    return this.filmsService.getAllFilms();
  }

  @Get(':id')
  async getFilmById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<FilmDto> {
    return this.filmsService.getFilm(id);
  }
}
