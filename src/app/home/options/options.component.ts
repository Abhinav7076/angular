import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { dataService } from '../data.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color' : 'white'
      })),
      state('correct', style({
        'background-color': '#88B04B',
        'color': 'white'
      })),
      state('wrong', style({
        'background-color': '#E15D44',
        'color': 'white'
      })),
      transition('normal => correct', animate(500)),
      transition('normal => wrong', animate(500))
    ])
  ]
})
export class OptionsComponent implements OnInit {
  @Input() data: {content: string, ans: string, idx: number}
  state: string = 'normal'
  @ViewChild('opSel1') optionSelected1: ElementRef
  @Output() idx = new EventEmitter<number>()

  constructor(private dataService: dataService) { }

  checkAnswer(){
      console.log("service "+this.dataService.idx)
      if(this.optionSelected1.nativeElement.innerHTML === this.data.ans) {
        this.state = 'correct'
        this.dataService.score += 1
      }
      else
        this.state = 'wrong'
      setTimeout(()=> { 
        this.dataService.idx += 1
        this.state='normal'
       }, 1000)
    }
  incrementIndex(){
    
  }
  ngOnInit(): void {
  }

}
