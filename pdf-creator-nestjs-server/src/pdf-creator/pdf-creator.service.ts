import { Injectable } from '@nestjs/common';
import { PdfRequestDto } from './dto/pdf-request.dto';

@Injectable()
export class PdfCreatorService {
    createPdf(pdfRequestDto: PdfRequestDto) {
        return 'Hello'
    }
}
