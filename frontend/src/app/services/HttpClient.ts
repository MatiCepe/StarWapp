export class HttpClient {
    private readonly baseUrl: string;
    constructor() {
        this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;
        console.log('API Base URL:', this.baseUrl); 
    }
  
    async get<T>(path: string): Promise<T> {
      const res = await fetch(`${this.baseUrl}${path}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      return res.json();
    }
  
    async post<T>(path: string, body: any): Promise<T> {
      const res = await fetch(`${this.baseUrl}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      return res.json();
    }
  }