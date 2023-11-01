import { Module } from '@nestjs/common';
import { CatService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { DogsModule } from './dogs/dogs.module';

@Module({
    controllers: [CatsController],
    providers: [CatService],
    imports: [DogsModule],
})
export class AnimalsModule { }
