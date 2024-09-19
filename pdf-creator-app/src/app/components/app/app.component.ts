import { Component } from '@angular/core';
import { PdfRequestDto } from '../../interfaces/PdfRequestDto';

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
    title: 'Pan',
    name: 'Michał',
    surname: 'Mocarski',
    identityNumber: '87040613010',
    templateName: 'my-template'
  }

  handleFormSubmit() {
    this.page = Page.FormConfirmation
  }

  onConfirmBack() {
    this.page = Page.Form
  }
}
