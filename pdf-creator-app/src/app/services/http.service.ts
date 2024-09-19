import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PdfRequestDto } from '../interfaces/PdfRequestDto';

const BASE_URL = 'http://localhost:3000/'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  sendPdfRequestAndDownloadFile(pdfRequest: PdfRequestDto) {
    const url = BASE_URL + 'pdf-creator/create'

    const params = {
      ...pdfRequest
    }

    this.http.get(url, {
      params,
      responseType: 'blob',
    }).subscribe(
      (response) => {
        this.downloadFile(response as any)
      },
      (error) => { console.log(error); }
    );
  }

  private downloadFile(data: Response) {
    const blob = new Blob([data as unknown as BlobPart], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
