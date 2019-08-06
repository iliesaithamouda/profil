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

  private _data: Data;
  constructor( private httpClient: HttpClient) { }

  initializeData() {
    this._data = {
      items: this.servicesItems, 
      title: 'My Posts'};
  }

  get data(): Data {
    return this._data;
  }

  get postItems(): Observable<any> {
    let headers = new HttpHeaders();
    //headers.append('origin','medium.com');
    return this.httpClient.get<any>(postSource, { headers: headers}).pipe(
      tap( result => {
          console.log(result);
         // return result.json.data;
          return result;
      }));
  }

  get servicesItems(): Array<{imgPath: string; title: string; description: string}> {



      return [{
          imgPath : './assets/test.jpg', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
        {
          imgPath : './assets/test.jpg', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
        {
          imgPath : './assets/test.jpg', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
        {
          imgPath : './assets/test.jpg', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
        {
          imgPath : './assets/test.jpg', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
        {
          imgPath : './assets/test.jpg', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
      ];
  }
}
