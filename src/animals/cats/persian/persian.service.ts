import { Injectable } from '@nestjs/common';
import { CreatePersianDto } from './dto/create-persian.dto';
import { UpdatePersianDto } from './dto/update-persian.dto';

@Injectable()
export class PersianService {
  create(createPersianDto: CreatePersianDto) {
    return 'This action adds a new persian';
  }

  findAll() {
    return `This action returns all persian`;
  }

  findOne(id: number) {
    return `This action returns a #${id} persian`;
  }

  update(id: number, updatePersianDto: UpdatePersianDto) {
    return `This action updates a #${id} persian`;
  }

  remove(id: number) {
    return `This action removes a #${id} persian`;
  }
}
