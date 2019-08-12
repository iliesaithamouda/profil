import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Data } from '../portfolio/data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  data: Data;
  postItems$: Observable<any>;
  response: Array<any>;

  constructor( private postService: PostsService) { }

  ngOnInit() {
    let result: any;
    this.postService.postItems.subscribe(successData => { 
      // nothing will happen here because the response will always have a syntax error due to a protection against cross site scripting.
      // result = JSON.parse(successData);
      // this.changePostKeysToListOfPosts(result);
    }, errors => { 
     // this.response = JSON.parse(errors.error.text.replace('])}while(1);</x>',''));
     let jsonString = errors.error.text.replace('])}while(1);</x>','');
     
     result = JSON.parse(jsonString);
     this.changePostKeysToListOfPosts(result);
    });

    
  }

  changePostKeysToListOfPosts(result: any) {
    let arrayCustomKeys: { [key: string]: any } = result.payload.references.Post;
    
    let postList: Array<any> = new Array();
    for(let key in arrayCustomKeys){
        if (key) {
          postList.push(arrayCustomKeys[key]);
        }

    }
    this.response = postList;

  }

  get postItems(): Observable<any> {
    return this.postItems$;
  }

}
