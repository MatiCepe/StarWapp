import { Test, TestingModule } from '@nestjs/testing';
import { PlanetController } from '../controllers/PlanetController';
import { PlanetService } from 'src/services/PlanetService';

describe('PlanetsController', () => {
  let controller: PlanetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanetController],
      providers: [
        {
          provide: PlanetService,
          useValue: {
            // Métodos mockeados según necesites testear después
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PlanetController>(PlanetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
