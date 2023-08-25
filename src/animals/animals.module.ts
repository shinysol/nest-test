import { Module } from '@nestjs/common';
import { CatService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';

@Module({
    controllers: [CatsController, DogsController],
    providers: [CatService],
})
export class AnimalsModule { }
