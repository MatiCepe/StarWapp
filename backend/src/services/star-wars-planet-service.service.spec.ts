import { Test, TestingModule } from '@nestjs/testing';
import { StarWarsPlanetsServiceService } from './star-wars-planet-service.service';

describe('StarWarsPlanetsServiceService', () => {
  let service: StarWarsPlanetsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarWarsPlanetsServiceService],
    }).compile();

    service = module.get<StarWarsPlanetsServiceService>(StarWarsPlanetsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
