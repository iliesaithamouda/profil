import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const postUrl = 'https://rest.sendinc.com/message.json';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(email: string, subject: string, message: string) {
    let payload = new FormData();
    payload.append('email','iliesaithamouda@gmail.com');
    payload.append('recipients', 'iliesaithamouda@gmail.com');
    payload.append('subject', subject);
    payload.append('message', message);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data',
        'Authorization': 'Basic ' + btoa('iliesaithamouda@gmail.com:toufaha13')
      })
    };

    return this.http.post<any>(postUrl, payload, httpOptions);
  }
}
