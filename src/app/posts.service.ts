import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { map } from "rxjs";
import { ToastService } from 'angular-toastify'

@Injectable({providedIn: 'root'})
export class PostService { 
    url: string = 'https://ng-tutorial-1b243-default-rtdb.firebaseio.com/posts.json'
    
    loadedPosts: Post[] = []
    err: string = ''

    constructor(private http: HttpClient, private toastService: ToastService) {}

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
        }, error => {
            this.err = error.message
        })
    }

    clearPosts() {
        // Send Http request
        this.http.delete(this.url).subscribe(()=>{
            this.loadedPosts.splice(0)
        })
      }

    toastMessage(){
        console.log("tost")
        this.toastService.info('message');
    }
}