import { Injectable } from '@angular/core';
import { Data } from './data.model';

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
      title: layoutType === 'Work' ? 'My Portfolio' : 'My Languages'};
  }

  getData(): Data {
    return this._data;
  }

  getServicesItems(): Array<{imgPath: string; title: string; description: string}> {
      return [
        {
          imgPath : 'fab fa-angular', 
          title: 'ANGULAR', 
          description: 'Learning this language from the start was a pleasure. To be able to see how far it got is exquisite'
        },
        {
          imgPath : 'fab fa-adobe', 
          title: 'AEM & Cold Fusion', 
          description: 'slowly but surely, I\'m trying to speak the adobe language, so rich and yet not used that much'
        },
        {
          imgPath : 'fab fa-java', 
          title: 'JAVA', 
          description: 'What a pleasure to write in Java, my first language and still the one'
        },
        {
          imgPath : 'fab fa-html5', 
          title: 'HTML', 
          description: 'Althought i spoke so many languages through the years, HTML is a classic that we\'ll never get rid of'
        },
        {
          imgPath : 'fab fa-node-js', 
          title: 'Nodejs', 
          description: 'I can\'t dream of a better way for a front-end developer to do a back-end job'
        },
        {
          imgPath : 'fas fa-infinity', 
          title: 'DevOps', 
          description: 'Jenkins, UCD, Ansible, Dockers, GCP, AWS, Azure,  what else ? so many buzzwords, but they have no secret for me'
        }
      ];
  }

  getWorkItems(): Array<{imgPath: string; title: string; description: string}> {
    return [{
        imgPath : './assets/test.jpg', 
        title: 'My first web site', 
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
