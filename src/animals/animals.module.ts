import { Module } from '@nestjs/common';
import { CatService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';

@Module({
    controllers: [CatsController, DogsController],
    providers: [CatService, DogsService],
})
export class AnimalsModule { }
