import { Module } from '@nestjs/common';
import { PdfCreatorModule } from './pdf-creator/pdf-creator.module';

@Module({
  imports: [PdfCreatorModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
