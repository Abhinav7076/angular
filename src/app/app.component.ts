import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient, protected postService: PostService) {}

  ngOnInit() {}

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.postService.createPost(postData)
  }

  onFetchPosts() {
    // Send Http request
    this.postService.fetchPosts()
  }

  onClearPosts() {
    // Send Http request
    this.postService.clearPosts()
  }
}
