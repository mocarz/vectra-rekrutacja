import { Body, Controller, Get } from '@nestjs/common';
import { PdfCreatorService } from './pdf-creator.service';
import { PdfRequestDto } from './dto/pdf-request.dto';

@Controller('pdf-creator')
export class PdfCreatorController {
    constructor(private readonly pdfCreatorService: PdfCreatorService) { }

    @Get('create')
    createPdf(@Body() pdfRequestDto: PdfRequestDto): string {
        return this.pdfCreatorService.createPdf(pdfRequestDto);
    }
}
