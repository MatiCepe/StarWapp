import { Controller } from '@nestjs/common';
import { PeopleDto } from 'src/dtos/PeopleDTO';
import { PeopleService } from 'src/services/PeopleService';
import { BaseController } from './BaseController';

@Controller('people')
export class PeopleController extends BaseController<PeopleDto> {
  constructor(private readonly starwarsService: PeopleService) {
    super(starwarsService);
  }
}
