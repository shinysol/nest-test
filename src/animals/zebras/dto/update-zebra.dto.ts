import { PartialType } from '@nestjs/swagger';
import { CreateZebraDto } from './create-zebra.dto';

export class UpdateZebraDto extends PartialType(CreateZebraDto) {}
