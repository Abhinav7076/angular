import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { dataService } from './data.service';
import { profile } from './profile.model';
import { interval, Observable, Subscription } from 'rxjs';
import { state, style, trigger } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color' : 'yellow'
      })),
      state('highlight', style({
        'background-color': 'red'
      }))
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  state = 'normal'
  subscription: Subscription
  count = 0

  constructor(private dataService: dataService) { }
  timeLeft: number = 3;
  interval;

  changeColor(){
    this.state = 'highlight'
  }

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
