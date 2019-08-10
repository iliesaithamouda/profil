import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const postUrl = 'http://localhost:3000/messages';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(email: string, subject: string, message: string) {
    let payload = { id: 'JjU7cb91ppja0YqdR6wN', email: email, subject: subject, message: message};

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<any>(postUrl, payload, httpOptions);
  }
}
