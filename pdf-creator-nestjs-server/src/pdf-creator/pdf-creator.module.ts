import { Module } from '@nestjs/common';
import { PdfCreatorController } from './pdf-creator.controller';
import { PdfCreatorService } from './pdf-creator.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdfCreateRequest } from './entities/pdf-request.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PdfCreateRequest])
  ],
  controllers: [PdfCreatorController],
  providers: [PdfCreatorService]
})
export class PdfCreatorModule {}
