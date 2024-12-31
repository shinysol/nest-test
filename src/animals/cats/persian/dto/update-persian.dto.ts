import { PartialType } from '@nestjs/swagger';
import { CreatePersianDto } from './create-persian.dto';

export class UpdatePersianDto extends PartialType(CreatePersianDto) {}
