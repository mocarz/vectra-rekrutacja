import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PdfRequestDto } from '../interfaces/PdfRequestDto';
import { identityNumberValidator } from '../shared/form-validators/identity-number-validator';
import { capitalFirstCharacter } from '../shared/form-validators/capital-first-character';


@Component({
  selector: 'app-pdf-form',
  templateUrl: './pdf-form.component.html',
  styleUrls: ['./pdf-form.component.css']
})
export class PdfFormComponent implements OnInit {

  constructor() { }

  @Output() onSubmitForm = new EventEmitter<PdfRequestDto>();

  pdfRequestForm: FormGroup

  ngOnInit(): void {
    this.pdfRequestForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      name: new FormControl('Michał', [capitalFirstCharacter()]),
      surname: new FormControl('Mocarski', [capitalFirstCharacter()]),
      identityNumber: new FormControl('87040613010', [identityNumberValidator()]),
      templateName: new FormControl('my-template', [Validators.required]),
    });
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
