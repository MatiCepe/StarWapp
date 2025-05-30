import { Controller, Get, Param } from '@nestjs/common';
import { FullPeopleDto } from 'src/dtos/FullPeopleDTO';
import { PeopleDto } from 'src/dtos/PeopleDTO';
import { PeopleService } from 'src/services/PeopleService';
import { BaseController } from './BaseController';

@Controller('people')
export class PeopleController extends BaseController<PeopleDto> {
  constructor(private readonly starwarsService: PeopleService) {
    super(starwarsService);
  }

  @Get('full/:id')
  getFullById(@Param('id') id: string): Promise<FullPeopleDto> {
    const decodedId = decodeURIComponent(id);
    return this.starwarsService.getFullById(decodedId);
  }
}
