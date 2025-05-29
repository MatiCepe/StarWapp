import { Test, TestingModule } from '@nestjs/testing';
import { PeopleController } from '../controllers/PeopleController';
import { PeopleService } from 'src/services/PeopleService';

describe('PeopleController', () => {
  let controller: PeopleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeopleController],
      providers: [
        {
          provide: PeopleService,
          useValue: {
            // Métodos mockeados según necesites testear después
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PeopleController>(PeopleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
