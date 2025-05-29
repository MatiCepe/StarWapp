import { OnMemoryCacheService } from 'src/cache/OnMemoryCacheService';
import { HttpClient } from 'src/services/HttpClient';
import { PeopleService } from 'src/services/PeopleService';

jest.mock('src/services/HttpClient');
jest.mock('src/cache/OnMemoryCacheService');

describe('PeopleService', () => {
  let service: PeopleService;
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

    service = new PeopleService(mockHttpClient, mockCache);
  });

  it('should return people from API and validate them', async () => {
    const apiResponse = [{ name: 'Luke Skywalker' }];
    mockHttpClient.get.mockResolvedValue(apiResponse);

    const result = await service.getAll();

    expect(mockHttpClient.get).toHaveBeenCalledWith('/people');
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Luke Skywalker' }),
      ]),
    );
  });

  it('should return cached people if available', async () => {
    const cachedData = [{ name: 'Leia Organa' }];
    mockCache.get.mockReturnValue(cachedData);

    const result = await service.getAll();

    expect(mockHttpClient.get).not.toHaveBeenCalled();
    expect(result).toEqual(cachedData);
  });

  it('should fetch person by id', async () => {
    const luke = { name: 'Luke Skywalker' };
    mockHttpClient.get.mockResolvedValue(luke);

    const result = await service.getById(1);

    expect(mockHttpClient.get).toHaveBeenCalledWith('/people/1');
    expect(result).toEqual(luke);
  });
});
