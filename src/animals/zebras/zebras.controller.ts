import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ZebrasService } from './zebras.service';
import { CreateZebraDto } from './dto/create-zebra.dto';
import { UpdateZebraDto } from './dto/update-zebra.dto';

@Controller('zebras')
export class ZebrasController {
  constructor(private readonly zebrasService: ZebrasService) {}

  @Post()
  create(@Body() createZebraDto: CreateZebraDto) {
    return this.zebrasService.create(createZebraDto);
  }

  @Get()
  findAll() {
    return this.zebrasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zebrasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZebraDto: UpdateZebraDto) {
    return this.zebrasService.update(+id, updateZebraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zebrasService.remove(+id);
  }
}
