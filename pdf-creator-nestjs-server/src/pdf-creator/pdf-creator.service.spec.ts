import { Test, TestingModule } from '@nestjs/testing';
import { PdfCreatorService } from './pdf-creator.service';

describe('PdfCreatorService', () => {
  let service: PdfCreatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfCreatorService],
    }).compile();

    service = module.get<PdfCreatorService>(PdfCreatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
