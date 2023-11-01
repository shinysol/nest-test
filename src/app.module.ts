import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [AnimalsModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
