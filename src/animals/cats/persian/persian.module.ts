import { Module } from '@nestjs/common';
import { PersianService } from './persian.service';
import { PersianController } from './persian.controller';

@Module({
  controllers: [PersianController],
  providers: [PersianService],
})
export class PersianModule {}
