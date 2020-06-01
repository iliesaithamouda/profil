import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

const postUrl = 'https://im8-docker.herokuapp.com/messages';
const mailServerUserId = 'JjU7cb91ppja0YqdR6wN';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(email: string, subject: string, message: string) {
    let payload = { id: mailServerUserId, email: email, subject: subject, message: message};

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<Contact>(postUrl, payload, httpOptions);
  }
}
