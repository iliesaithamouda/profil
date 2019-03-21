import { Injectable } from '@angular/core';
import { Data } from './Data.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private _data: Data;
  constructor() { }

  initializeData( layoutType: 'Services' | 'Work') {
    this._data = {
      items: layoutType === 'Work' ? this.getWorkItems() : this.getServicesItems(), 
      layoutType: layoutType, 
      title: layoutType === 'Work' ? 'My Portfolio' : 'My Services'};
  }

  getData(): Data {
    return this._data;
  }

  getServicesItems(): Array<{imgPath: string; title: string; description: string}> {
      return [{
          imgPath : 'fa-html5', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
        {
          imgPath : 'fa-html5', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
        {
          imgPath : 'fa-html5', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
        {
          imgPath : 'fa-html5', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
        {
          imgPath : 'fa-html5', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
        {
          imgPath : 'fa-html5', 
          title: 'web development', 
          description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
        },
      ];
  }

  getWorkItems(): Array<{imgPath: string; title: string; description: string}> {
    return [{
        imgPath : 'toto', 
        title: 'My first web site', 
        description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
      },
      {
        imgPath : 'fa-html5', 
        title: 'web development', 
        description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
      },
      {
        imgPath : 'fa-html5', 
        title: 'web development', 
        description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
      },
      {
        imgPath : 'fa-html5', 
        title: 'web development', 
        description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
      },
      {
        imgPath : 'fa-html5', 
        title: 'web development', 
        description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
      },
      {
        imgPath : 'fa-html5', 
        title: 'web development', 
        description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
      },
    ];
}
}
