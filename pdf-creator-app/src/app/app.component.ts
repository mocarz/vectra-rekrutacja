import { Component } from '@angular/core';
import { PdfRequestDto } from './interfaces/PdfRequestDto';

enum Page {
  Form = "Form",
  FormConfirmation = "FormConfirmation",
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page = Page.Form

  pdfRequest: PdfRequestDto = {
    title: '',
    name: '',
    surname: '',
    identityNumber: '',
    templateName: ''
  }

  handleFormSubmit() {
    this.page = Page.FormConfirmation
  }

  onConfirmBack() {
    this.page = Page.Form
  }
}
