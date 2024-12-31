import { Test, TestingModule } from '@nestjs/testing';
import { PersianService } from './persian.service';

describe('PersianService', () => {
  let service: PersianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersianService],
    }).compile();

    service = module.get<PersianService>(PersianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
