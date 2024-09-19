import { Module } from '@nestjs/common';
import { PdfCreatorController } from './pdf-creator.controller';
import { PdfCreatorService } from './pdf-creator.service';

@Module({
  controllers: [PdfCreatorController],
  providers: [PdfCreatorService]
})
export class PdfCreatorModule {}
