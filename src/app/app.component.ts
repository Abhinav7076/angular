import { Component, OnInit } from '@angular/core';
// import { dataService } from './home/data.service';
// import { profile } from './home/quiz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // profiles: profile[] = []

  // constructor(private dataService: dataService) {}

  ngOnInit(): void {
    // this.profiles = this.dataService.profiles
  }
}
