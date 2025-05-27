import { Test, TestingModule } from '@nestjs/testing';
import { StarshipsController } from './StarshipsController';

describe('StarshipsController', () => {
  let controller: StarshipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarshipsController],
    }).compile();

    controller = module.get<StarshipsController>(StarshipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
