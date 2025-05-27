import { Test, TestingModule } from '@nestjs/testing';
import { StarhipServiceService } from './StarshipService';

describe('StarWarsStarhipServiceService', () => {
  let service: StarhipServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarhipServiceService],
    }).compile();

    service = module.get<StarhipServiceService>(
      StarhipServiceService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
