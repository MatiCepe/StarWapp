import { Test, TestingModule } from '@nestjs/testing';
import { StarWarsStarhipServiceService } from './star-wars-starhip-service.service';

describe('StarWarsStarhipServiceService', () => {
  let service: StarWarsStarhipServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarWarsStarhipServiceService],
    }).compile();

    service = module.get<StarWarsStarhipServiceService>(
      StarWarsStarhipServiceService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
