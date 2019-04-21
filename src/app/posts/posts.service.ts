import { Injectable } from '@angular/core';
import { Data } from '../portfolio/data.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _data: Data;
  constructor() { }

  initializeData() {
    this._data = {
      items: this.servicesItems, 
      title: 'My Posts'};
  }

  get data(): Data {
    return this._data;
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
