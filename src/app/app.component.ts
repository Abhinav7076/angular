import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post('https://ng-tutorial-1b243-default-rtdb.firebaseio.com/posts.json', postData).subscribe(responseData=>{
      console.log(responseData)
    })
  }

  onFetchPosts() {
    // Send Http request
    this.http.get<{ [key: string]: Post }>('https://ng-tutorial-1b243-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(responseData=>{
      const arr: Post[] = []
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)) //check for not taking prototype [Object]
          arr.push({...responseData[key], id: key})
        }
        return arr
      }
    ))
    .subscribe(posts=>{
      this.loadedPosts = posts
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
