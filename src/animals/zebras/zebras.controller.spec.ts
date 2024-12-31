import { Test, TestingModule } from '@nestjs/testing';
import { ZebrasController } from './zebras.controller';
import { ZebrasService } from './zebras.service';

describe('ZebrasController', () => {
  let controller: ZebrasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZebrasController],
      providers: [ZebrasService],
    }).compile();

    controller = module.get<ZebrasController>(ZebrasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
