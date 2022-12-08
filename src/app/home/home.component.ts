import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { dataService } from './data.service';
import { profile } from './profile.model';
import { interval, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  subscription: Subscription
  count = 0

  constructor(private dataService: dataService) { }
  timeLeft: number = 3;
  interval;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  ngOnInit() {
    // const customIntervalObservable = Observable.create(observer=>{
    //   let count=0
    //   setInterval(()=>{
    //     observer.next(count)
    //     // this.count = count
    //     if(count==0)
    //       observer.complete()
    //     if(count>3)
    //       observer.error(new Error('Count greater than 3'))
    //     count++
    //   }, 1000)
    // })
    // customIntervalObservable.subscribe(data=>{
    //   console.log(data)
    // }, error =>{
    //   console.log(error)
    //   alert(error)
    // }, ()=>{
    //   console.log('Completed')
    // })
    this.startTimer()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
