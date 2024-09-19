import { Injectable, StreamableFile } from '@nestjs/common';
import { PdfRequestDto } from './dto/pdf-request.dto';
import { PdfCreateRequest } from './entities/pdf-request.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ReadStream } from 'fs';
import { create, CreateOptions } from 'html-pdf'
import * as fs from 'fs';
import { join } from 'path';

const TEMPLATES_LOCATION = './src/pdf-creator/templates/'

@Injectable()
export class PdfCreatorService {
	constructor(
		@InjectRepository(PdfCreateRequest)
		private pdfRequestRepository: Repository<PdfCreateRequest>,
	) { }

	async createPdf(pdfRequestDto: PdfRequestDto): Promise<StreamableFile> {
		this.savePdfRequest(pdfRequestDto)

		const template = this.getTemplate(pdfRequestDto.templateName)
		const pdfStream = await this.createPdfStream(template, pdfRequestDto)

		return new StreamableFile(pdfStream, {
			type: 'application/pdf'
		});
	}

	private savePdfRequest(pdfRequestDto: PdfRequestDto) {
		const pdfRequest = this.pdfRequestRepository.create({
			...pdfRequestDto
		})

		this.pdfRequestRepository.save(pdfRequest)
	}

	private getTemplateOptions() {
		let options: CreateOptions = {
			format: 'A4'
		};

		return options
	}

	private getTemplate(templateName: string) {
		const templateFile = templateName + ".html"
		const templateFullPath = join(process.cwd(), TEMPLATES_LOCATION, templateFile)
		return fs.readFileSync(templateFullPath).toString();
	}

	private getTemplateInterpolationKeys(pdfData: PdfRequestDto): (keyof PdfRequestDto)[] {
		let keys: (keyof typeof pdfData)[] = []

		let property: keyof typeof pdfData;
		for (property in pdfData) {
			if (property == 'templateName') {
				continue
			}

			keys.push(property)
		}

		return keys
	}

	private interpolateTemplate(template: string, pdfData: PdfRequestDto) {
		const keys = this.getTemplateInterpolationKeys(pdfData)

		for (const key of keys) {
			template = template.replaceAll(`\${${key}}`, pdfData[key])
		}

		return template
	}

	private async createPdfStream(template: string, pdfRequestDto: PdfRequestDto) {
		const templateInterpolated = this.interpolateTemplate(template, pdfRequestDto)
		const templateOptions = this.getTemplateOptions()

		const pdfStream = await new Promise<ReadStream>((resolve, reject) => {
			create(templateInterpolated, templateOptions).toStream(function (err, stream) {
				if (err) {
					reject(err)
				} else {
					resolve(stream)
				}
			});
		});

		return pdfStream
	}
}
