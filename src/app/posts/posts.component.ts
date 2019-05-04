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
    this.postService.initializeData();
    this.data = this.postService.data;
    //this.postItems$ = this.postService.postItems.subscribe(successData => { return successData}, errors => { console.log(errors)});
    let result: any;
    this.postService.postItems.subscribe(successData => { 
      result = JSON.parse(successData);
      this.changePostKeysToListOfPosts(result);
    }, errors => { 
     // this.response = JSON.parse(errors.error.text.replace('])}while(1);</x>',''));
     let jsonString = errors.error.text.replace('])}while(1);</x>','');
     console.log(jsonString);
     result = JSON.parse(jsonString);
     this.changePostKeysToListOfPosts(result);
    });

    
  }

  changePostKeysToListOfPosts(result: any) {
    let arrayCustomKeys: { [key: string]: any } = result.payload.post;
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
