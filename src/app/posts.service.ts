import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostService { 
    url: string = 'https://ng-tutorial-1b243-default-rtdb.firebaseio.com/posts.json'
    
    loadedPosts: Post[] = []

    constructor(private http: HttpClient) {}

    createPost(postData: Post){
        this.http.post(this.url, postData)
        .subscribe(responseData => {
            console.log(responseData)
        })
    }

    fetchPosts(){
        this.http.get<{[key: string]: Post}>(this.url)
        .pipe(map(responseData=>{
            const posts: Post[] = []
            for(const key in responseData){
                if(responseData.hasOwnProperty(key))
                    posts.push({...responseData[key], id: key})
            }
            return posts
        }))
        .subscribe(posts=>{
            this.loadedPosts = posts
        })
    }

    clearPosts() {
        // Send Http request
        this.http.delete(this.url).subscribe(()=>{
            this.loadedPosts.splice(0)
        })
      }
}