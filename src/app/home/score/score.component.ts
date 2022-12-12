import { Component, OnDestroy, OnInit } from '@angular/core';
import { dataService } from '../data.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit, OnDestroy {

  constructor(protected dataService: dataService) { }

  ngOnInit(): void {
    console.log(this.dataService.score)
  }

  ngOnDestroy(): void {
    this.dataService.reset()
  }

}
