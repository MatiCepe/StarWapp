import { Test, TestingModule } from '@nestjs/testing';
import { StarWarsPeopleService } from './star-wars-people-service';

describe('StarWarsApiServiceService', () => {
  let service: StarWarsPeopleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarWarsPeopleService],
    }).compile();

    service = module.get<StarWarsPeopleService>(StarWarsPeopleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
