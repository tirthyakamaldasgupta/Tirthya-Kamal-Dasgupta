import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Enquiry {
  timeStamp: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

interface EnquiryAdditionResponse {
  message: 'Enquiry added successfully';
}

@Injectable({
  providedIn: 'root',
})
export class EnquiryFormService {
  enquiryFormSubmissionEndpoint = import.meta.env[
    'NG_APP_ENQUIRY_FORM_SUBMISSION_ENDPOINT'
  ];

  constructor(private http: HttpClient) {}

  addEnquiry(enquiry: Enquiry): Observable<EnquiryAdditionResponse> {
    const currentDate = new Date();
    const localTimestampInEpoch =
      currentDate.getTime() - currentDate.getTimezoneOffset() * 60000;

    enquiry.timeStamp = localTimestampInEpoch;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });

    return this.http.post<EnquiryAdditionResponse>(this.enquiryFormSubmissionEndpoint, enquiry, {
      headers,
    });
  }
}
