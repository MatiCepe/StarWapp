import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';
import { HttpClient } from 'src/services/HttpClient';
import { StarhipService } from 'src/services/StarshipService';

jest.mock('src/services/HttpClient');
jest.mock('src/cache/OnMemoryCacheService');

describe('StarhipService', () => {
  let service: StarhipService;
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

    service = new StarhipService(mockHttpClient, mockCache);
  });

  it('should return Starship from API and validate them', async () => {
    const apiResponse = [{ name: 'CR90 corvette' }];
    mockHttpClient.get.mockResolvedValue(apiResponse);

    const result = await service.getAll();

    expect(mockHttpClient.get).toHaveBeenCalledWith('/starships');
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'CR90 corvette' }),
      ]),
    );
  });

  it('should return cached Starship if available', async () => {
    const cachedData = [{ name: 'CR90 corvette' }];
    mockCache.get.mockReturnValue(cachedData);

    const result = await service.getAll();

    expect(mockHttpClient.get).not.toHaveBeenCalled();
    expect(result).toEqual(cachedData);
  });

  it('should fetch Starship by id', async () => {
    const cr90 = { name: 'CR90 corvette' };
    mockHttpClient.get.mockResolvedValue(cr90);

    const result = await service.getById(1);

    expect(mockHttpClient.get).toHaveBeenCalledWith('/starships/1');
    expect(result).toEqual(cr90);
  });
});
