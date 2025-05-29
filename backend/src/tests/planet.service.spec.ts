import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';
import { HttpClient } from 'src/services/HttpClient';
import { PlanetService } from 'src/services/PlanetService';

jest.mock('src/services/HttpClient');
jest.mock('src/cache/OnMemoryCacheService');

describe('PlanetService', () => {
  let service: PlanetService;
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

    service = new PlanetService(mockHttpClient, mockCache);
  });

  it('should return planet from API and validate them', async () => {
    const apiResponse = [{ name: 'Alderaan' }];
    mockHttpClient.get.mockResolvedValue(apiResponse);

    const result = await service.getAll();

    expect(mockHttpClient.get).toHaveBeenCalledWith('/planets');
    expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: 'Alderaan' })]),
    );
  });

  it('should return cached planet if available', async () => {
    const cachedData = [{ name: 'Alderaan' }];
    mockCache.get.mockReturnValue(cachedData);

    const result = await service.getAll();

    expect(mockHttpClient.get).not.toHaveBeenCalled();
    expect(result).toEqual(cachedData);
  });

  it('should fetch planet by id', async () => {
    const ald = { name: 'Alderaan' };
    mockHttpClient.get.mockResolvedValue(ald);

    const result = await service.getById(1);

    expect(mockHttpClient.get).toHaveBeenCalledWith('/planets/1');
    expect(result).toEqual(ald);
  });
});
