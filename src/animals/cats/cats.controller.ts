import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CatService } from './cats.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('cats')
@ApiTags('Cats')
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
