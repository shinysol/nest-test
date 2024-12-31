import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersianService } from './persian.service';
import { CreatePersianDto } from './dto/create-persian.dto';
import { UpdatePersianDto } from './dto/update-persian.dto';

@Controller('persian')
export class PersianController {
  constructor(private readonly persianService: PersianService) {}

  @Post()
  create(@Body() createPersianDto: CreatePersianDto) {
    return this.persianService.create(createPersianDto);
  }

  @Get()
  findAll() {
    return this.persianService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.persianService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersianDto: UpdatePersianDto) {
    return this.persianService.update(+id, updatePersianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.persianService.remove(+id);
  }
}
