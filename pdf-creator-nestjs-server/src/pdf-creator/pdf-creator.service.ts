import { Injectable } from '@nestjs/common';
import { PdfRequestDto } from './dto/pdf-request.dto';
import { PdfCreateRequest } from './entities/pdf-request.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PdfCreatorService {
	constructor(
		@InjectRepository(PdfCreateRequest)
		private pdfRequestRepository: Repository<PdfCreateRequest>,
	) { }

	createPdf(pdfRequestDto: PdfRequestDto) {
		this.savePdfRequest(pdfRequestDto)
		return 'Hello'
	}

	private savePdfRequest(pdfRequestDto: PdfRequestDto) {
		const pdfRequest = this.pdfRequestRepository.create({
			...pdfRequestDto
		})

		this.pdfRequestRepository.save(pdfRequest)
	}
}
