import { Test, TestingModule } from '@nestjs/testing';
import { PdfCreatorController } from './pdf-creator.controller';

describe('PdfCreatorController', () => {
  let controller: PdfCreatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfCreatorController],
    }).compile();

    controller = module.get<PdfCreatorController>(PdfCreatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
