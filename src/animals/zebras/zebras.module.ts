import { Module } from '@nestjs/common';
import { ZebrasService } from './zebras.service';
import { ZebrasController } from './zebras.controller';

@Module({
  controllers: [ZebrasController],
  providers: [ZebrasService],
})
export class ZebrasModule {}
