import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CatService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatService) { }
    @Get()
    getCats(): string {
        return this.catService.getCats();
    }

    @Get(':id')
    getCat(@Param() params: any): string {
        return this.catService.getCats(params.id);
    }
}
