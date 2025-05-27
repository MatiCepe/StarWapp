import { Test, TestingModule } from '@nestjs/testing';
import { StarWarsApiService } from './star-wars-api-service';

describe('StarWarsApiServiceService', () => {
  let service: StarWarsApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarWarsApiService],
    }).compile();

    service = module.get<StarWarsApiService>(StarWarsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
