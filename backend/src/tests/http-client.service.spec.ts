import { Test, TestingModule } from '@nestjs/testing';
import { HttpClient } from '../services/HttpClient';
import axios from 'axios';
import { HttpException } from '@nestjs/common';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('HttpClientService', () => {
  let service: HttpClient;
  let axiosInstanceMock: jest.Mocked<any>;

  beforeEach(() => {
    axiosInstanceMock = {
      get: jest.fn(),
      post: jest.fn(),
      // si necesitás otros métodos, los agregás acá
    };

    mockedAxios.create.mockReturnValue(axiosInstanceMock);

    service = new HttpClient();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return data when GET request succeeds', async () => {
    const mockData = { name: 'Luke Skywalker' };
    axiosInstanceMock.get.mockResolvedValue({ data: mockData });

    const data = await service.get('/people/1');

    expect(data).toEqual(mockData);
    expect(axiosInstanceMock.get).toHaveBeenCalledWith('/people/1', undefined);
  });

  it('should throw HttpException when GET request fails', async () => {
    const error = {
      message: 'Not Found',
      response: {
        status: 404,
        data: {},
      },
    };
    mockedAxios.create.mockReturnThis();
    mockedAxios.get.mockRejectedValue({
      message: 'Not Found',
      response: { status: 404 },
    });

    await expect(service.get('/invalid-url')).rejects.toThrow(HttpException);
  });
});
