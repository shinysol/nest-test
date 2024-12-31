import { Test, TestingModule } from '@nestjs/testing';
import { ZebrasService } from './zebras.service';

describe('ZebrasService', () => {
  let service: ZebrasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZebrasService],
    }).compile();

    service = module.get<ZebrasService>(ZebrasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
