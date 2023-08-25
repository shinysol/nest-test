import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private readonly dogService: DogsService) { }

    @Get()
    getDogs(): string {
        return this.dogService.getDogs();
    }

    @Get(':name')
    getDog(@Param() params: any): string {
        return this.dogService.getDogs(params.name);
    }
}
