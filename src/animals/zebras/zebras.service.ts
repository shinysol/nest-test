import { Injectable } from '@nestjs/common';
import { CreateZebraDto } from './dto/create-zebra.dto';
import { UpdateZebraDto } from './dto/update-zebra.dto';

@Injectable()
export class ZebrasService {
  create(createZebraDto: CreateZebraDto) {
    return 'This action adds a new zebra';
  }

  findAll() {
    return `This action returns all zebras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zebra`;
  }

  update(id: number, updateZebraDto: UpdateZebraDto) {
    return `This action updates a #${id} zebra`;
  }

  remove(id: number) {
    return `This action removes a #${id} zebra`;
  }
}
