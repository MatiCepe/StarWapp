import { Controller } from '@nestjs/common';
import { FilmDto } from 'src/dtos/FilmDTO';
import { FilmsService } from 'src/services/FilmsService';
import { BaseController } from './BaseController';

@Controller('films')
export class FilmsController extends BaseController<FilmDto> {
  constructor(private readonly filmSertvice: FilmsService) {
    super(filmSertvice);
  }
}
