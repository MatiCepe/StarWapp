import { Test, TestingModule } from '@nestjs/testing';
import { PlanetsService } from './PlanetService';

describe('StarWarsPlanetsServiceService', () => {
  let service: PlanetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanetsService],
    }).compile();

    service = module.get<PlanetsService>(PlanetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
