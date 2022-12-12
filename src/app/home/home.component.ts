import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  interval


  constructor(protected dataService: dataService, private router: Router) { }
  
  startTimer() {
    this.interval = setInterval(() => {
      if(this.dataService.timeLeft >= 0) {
        this.dataService.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.dataService.idx += 1
        this.dataService.resetTime()
        if(this.dataService.idx===3)
          this.router.navigate(['/score'])
        this.startTimer()
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  ngOnInit() {
    this.startTimer()
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
