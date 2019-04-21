import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Data } from '../portfolio/data.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  data: Data;

  constructor( private postService: PostsService) { }

  ngOnInit() {
    this.postService.initializeData();
    this.data = this.postService.data;
  }

}
