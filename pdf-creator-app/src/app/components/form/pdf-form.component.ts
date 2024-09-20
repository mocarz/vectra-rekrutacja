import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PdfRequestDto } from '../../interfaces/PdfRequestDto';
import { identityNumberValidator } from '../../shared/form-validators/identity-number-validator';
import { capitalFirstCharacter } from '../../shared/form-validators/capital-first-character';


@Component({
  selector: 'app-pdf-form',
  templateUrl: './pdf-form.component.html',
  styleUrls: ['./pdf-form.component.css']
})
export class PdfFormComponent implements OnInit {

  constructor() { }

  @Input() inputRequest: PdfRequestDto;
  @Output() inputRequestChange: EventEmitter<PdfRequestDto> = new EventEmitter();
  @Output() onNext = new EventEmitter();

  pdfRequestForm: FormGroup

  ngOnInit(): void {
    this.pdfRequestForm = new FormGroup({
      title: new FormControl(this.inputRequest.title, [Validators.required]),
      name: new FormControl(this.inputRequest.name, [capitalFirstCharacter()]),
      surname: new FormControl(this.inputRequest.surname, [capitalFirstCharacter()]),
      identityNumber: new FormControl(this.inputRequest.identityNumber, [identityNumberValidator()]),
      templateName: new FormControl(this.inputRequest.templateName, [Validators.required]),
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
    this.inputRequestChange.emit(pdfRequest)

    this.onNext.emit()
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
