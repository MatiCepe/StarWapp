import { Test, TestingModule } from '@nestjs/testing';
import { StarWarsApiController } from './star-wars-api.controller';

describe('StarWarsApiController', () => {
  let controller: StarWarsApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarWarsApiController],
    }).compile();

    controller = module.get<StarWarsApiController>(StarWarsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
