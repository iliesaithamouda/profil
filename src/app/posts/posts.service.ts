import { Injectable } from '@angular/core';
import { Data } from '../portfolio/data.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const postSource = 'https://data.feedmirror.com/-LdHSTFAlBLXjXvdhPdx.json';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private httpClient: HttpClient) { }

  get postItems(): Observable<any> {
    let headers = new HttpHeaders();
    //headers.append('origin','medium.com');
    return this.httpClient.get<any>(postSource, { headers: headers}).pipe(
      tap( result => result));
  }
}
