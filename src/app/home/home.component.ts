import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { quiz } from './quiz.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit, OnDestroy {

  qData: quiz = new quiz('Europa is the moon of which planet ?','Jupiter','Saturn','Mars','Uranus','Jupiter')


  subscription: Subscription
  timeLeft: number = 3
  count = 0
  interval


  constructor() { }
  
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
    // this.startTimer()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
