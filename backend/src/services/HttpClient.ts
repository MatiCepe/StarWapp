import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable()
export class HttpClient {
  /**
   * Generic HTTP to make calls to the Swapi API.
   * It might be more generic in the future, but for now it is tailored to the Swapi API.
   * We could use a factory with a base URL, but for now since the time is short, I've kept it simple.
   * Uses Axios as HTTP client.
   * Will only implement Get and Post methods for now.
   * */
  private readonly axiosInstance: AxiosInstance;
  private readonly BASE_URL = 'https://swapi.info/api';

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.BASE_URL,
      timeout: 5000,
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(
      url,
      config,
    );
    return response.data;
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(
      url,
      data,
      config,
    );
    return response.data;
  }
}
