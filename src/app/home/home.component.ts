import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { dataService } from './data.service';
import { quiz } from './quiz.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [dataService]
})
export class HomeComponent implements OnInit, OnDestroy {

  qData: quiz[] = [
    new quiz('Europa is the moon of which planet ?','Jupiter','Saturn','Mars','Uranus','Jupiter'),
    new quiz('Phobos is the moon of which planet ?','Jupiter','Saturn','Mars','Uranus','Mars'),
    new quiz('Zagreb is the capital of which country ?','Slovenia','Croatia','Greece','Hungary','Croatia'),
  ]


  subscription: Subscription
  timeLeft: number = 3
  count = 0
  interval


  constructor(protected dataService: dataService) { }
  
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
    // this.subscription.unsubscribe()
  }

}
