import { Test, TestingModule } from '@nestjs/testing';
import { StarshipController } from '../controllers/StarshipController';
import { StarhipService } from 'src/services/StarshipService';

describe('StarshipsController', () => {
  let controller: StarshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarshipController],
      providers: [
        {
          provide: StarhipService,
          useValue: {
            // Métodos mockeados según necesites testear después
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<StarshipController>(StarshipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
