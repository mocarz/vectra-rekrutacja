import { Module } from '@nestjs/common';
import { PdfCreatorModule } from './pdf-creator/pdf-creator.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/database.sqlite',
      synchronize: true, // disable for prod
      autoLoadEntities: true,
    }),
    PdfCreatorModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
