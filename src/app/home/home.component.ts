import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { dataService } from './data.service';
import { profile } from './profile.model';
import { interval, Subscription } from 'rxjs';
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
    this.subscription = interval(1000).subscribe(count => {
      this.count=count
      console.log(count)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
