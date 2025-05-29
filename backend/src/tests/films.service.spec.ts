import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';
import { FilmService } from 'src/services/FilmService';
import { HttpClient } from 'src/services/HttpClient';

jest.mock('src/services/HttpClient');
jest.mock('src/cache/OnMemoryCacheService');

describe('FilmService', () => {
  let service: FilmService;
  let mockHttpClient: jest.Mocked<HttpClient>;
  let mockCache: jest.Mocked<OnMemoryCacheService>;
  let inMemoryCache: Record<string, any>;

  beforeEach(() => {
    inMemoryCache = {};
    mockHttpClient = {
      get: jest.fn(),
      post: jest.fn(),
    } as any;

    mockCache = {
      get: jest.fn((key: string) => inMemoryCache[key]),
      set: jest.fn((key: string, value: any) => {
        inMemoryCache[key] = value;
      }),
    } as any;

    service = new FilmService(mockHttpClient, mockCache);
  });

  it('should return Film from API and validate them', async () => {
    const apiResponse = [{ name: 'A New Hope' }];
    mockHttpClient.get.mockResolvedValue(apiResponse);

    const result = await service.getAll();

    expect(mockHttpClient.get).toHaveBeenCalledWith('/films');
    expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: 'A New Hope' })]),
    );
  });

  it('should return cached film if available', async () => {
    const cachedData = [{ name: 'A New Hope' }];
    mockCache.get.mockReturnValue(cachedData);

    const result = await service.getAll();

    expect(mockHttpClient.get).not.toHaveBeenCalled();
    expect(result).toEqual(cachedData);
  });

  it('should fetch film by id', async () => {
    const newHope = { name: 'A New Hope' };
    mockHttpClient.get.mockResolvedValue(newHope);

    const result = await service.getById(1);

    expect(mockHttpClient.get).toHaveBeenCalledWith('/films/1');
    expect(result).toEqual(newHope);
  });
});
