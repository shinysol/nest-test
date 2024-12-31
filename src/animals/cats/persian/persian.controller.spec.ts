import { Test, TestingModule } from '@nestjs/testing';
import { PersianController } from './persian.controller';
import { PersianService } from './persian.service';

describe('PersianController', () => {
  let controller: PersianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersianController],
      providers: [PersianService],
    }).compile();

    controller = module.get<PersianController>(PersianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
