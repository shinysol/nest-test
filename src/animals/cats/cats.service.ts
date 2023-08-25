import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    getCats(name: string = ''): string {
        return `This action returns ${name || 'all'} cat${name ? '' : 's'}`;
    }
}
