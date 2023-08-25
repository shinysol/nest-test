import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
    getDogs(name: string = ''): string {
        return `This action returns ${name || 'all'} dog${name ? '' : 's'}`;
    }
}
