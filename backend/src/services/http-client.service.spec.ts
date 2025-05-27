import { Test, TestingModule } from '@nestjs/testing';
import { HttpClient } from './HttpClient';

describe('HttpClientService', () => {
  let service: HttpClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpClient],
    }).compile();

    service = module.get<HttpClient>(HttpClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
