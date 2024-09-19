import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PdfRequestDto } from '../interfaces/PdfRequestDto';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor() { }

  @Output() onSubmitForm = new EventEmitter<PdfRequestDto>();

  pdfRequestForm = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    identityNumber: new FormControl(''),
    templateName: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    const pdfRequest: PdfRequestDto = {
      title: form.value.title,
      name: form.value.name,
      surname: form.value.surname,
      identityNumber: form.value.identityNumber,
      templateName: form.value.templateName,
    }

    this.onSubmitForm.emit(pdfRequest)
  }

  get title() {
    return this.pdfRequestForm.get('title')
  }

  get name() {
    return this.pdfRequestForm.get('name')
  }

  get surname() {
    return this.pdfRequestForm.get('surname')
  }

  get identityNumber() {
    return this.pdfRequestForm.get('identityNumber')
  }
}
