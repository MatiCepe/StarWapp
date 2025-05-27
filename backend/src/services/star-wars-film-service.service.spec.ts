import { Test, TestingModule } from '@nestjs/testing';
import { StarWarsFilmsServiceService } from './star-wars-film-service.service';

describe('StarWarsFilmsServiceService', () => {
  let service: StarWarsFilmsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarWarsFilmsServiceService],
    }).compile();

    service = module.get<StarWarsFilmsServiceService>(StarWarsFilmsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
