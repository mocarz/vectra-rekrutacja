import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PdfRequestDto } from '../../interfaces/PdfRequestDto';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-form-confirmation',
  templateUrl: './form-confirmation.component.html',
  styleUrls: ['./form-confirmation.component.css']
})
export class FormConfirmationComponent {

  constructor(private httpService: HttpService) { }

  @Input() pdfRequest: PdfRequestDto
  @Output() onBack = new EventEmitter()


  onSubmit() {
    this.httpService.sendPdfRequestAndDownloadFile(this.pdfRequest)
  }
}
