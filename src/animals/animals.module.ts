import { Module } from '@nestjs/common';
import { CatService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
import { HorsesController } from './horses/horses.controller';
import { ZebrasModule } from './zebras/zebras.module';
import { RabbitsModule } from './rabbits/rabbits.module';
import { PersianModule } from './cats/persian/persian.module';

@Module({
    controllers: [CatsController, DogsController, HorsesController],
    providers: [CatService, DogsService],
    imports: [ZebrasModule, RabbitsModule, PersianModule],
})
export class AnimalsModule { }
