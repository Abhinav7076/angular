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

  ngOnInit() {
    const customIntervalObservable = Observable.create(observer=>{
      let count=0
      setInterval(()=>{
        observer.next(count)
        count++
      }, 1000)
    })
    customIntervalObservable.subscribe(data=>{
      console.log(data)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
