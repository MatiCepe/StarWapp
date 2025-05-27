import { Test, TestingModule } from '@nestjs/testing';
import { PeopleService } from './PeopleService';

describe('StarWarsApiServiceService', () => {
  let service: PeopleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleService],
    }).compile();

    service = module.get<PeopleService>(PeopleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
