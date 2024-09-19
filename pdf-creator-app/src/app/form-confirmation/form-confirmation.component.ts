import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PdfRequestDto } from '../interfaces/PdfRequestDto';

@Component({
  selector: 'app-form-confirmation',
  templateUrl: './form-confirmation.component.html',
  styleUrls: ['./form-confirmation.component.css']
})
export class FormConfirmationComponent {

  constructor() { }

  @Input() pdfRequest: PdfRequestDto
  @Output() onBack = new EventEmitter()


  onSubmit() {
    console.log('submit')
  }

}
