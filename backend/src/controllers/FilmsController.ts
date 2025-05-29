import { Controller } from '@nestjs/common';
import { FilmDto } from 'src/dtos/FilmDTO';
import { FilmService } from 'src/services/FilmService';
import { BaseController } from './BaseController';

@Controller('films')
export class FilmsController extends BaseController<FilmDto> {
  constructor(private readonly filmSertvice: FilmService) {
    super(filmSertvice);
  }
}
