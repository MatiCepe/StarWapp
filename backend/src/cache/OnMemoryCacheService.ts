import { Injectable } from '@nestjs/common';
import * as NodeCache from 'node-cache'; // 👈 fijate en esto

@Injectable()
export class OnMemoryCacheService {
    private cache = new NodeCache({ stdTTL: 3600 });

    get<T>(key: string): T | undefined {
        return this.cache.get<T>(key);
    }

    set<T>(key: string, value: T): void {
        this.cache.set(key, value, 1000 * 60 * 60);
    }

    del(key: string): void {
        this.cache.del(key);
    }

    flush(): void {
        this.cache.flushAll();
    }
}
