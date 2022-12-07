import { Component, Input, OnInit } from '@angular/core';
import { dataService } from './data.service';
import { profile } from './profile.model';
import { interval } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private dataService: dataService) { }

  ngOnInit() {
    interval(1000).subscribe(count => {
      console.log(count)
    })
  }

}
