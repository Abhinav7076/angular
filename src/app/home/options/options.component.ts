import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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
        'background-color': '#DD4124',
        'color': 'white'
      })),
      transition('normal => correct', animate(500)),
      transition('normal => wrong', animate(500))
    ])
  ]
})
export class OptionsComponent implements OnInit {
  @Input() data: {content: string, ans: string}
  state: string = 'normal'
  @ViewChild('opSel1') optionSelected1: ElementRef
  
  constructor() { }
  checkAnswer(){
      console.log(this.data)
      if(this.optionSelected1.nativeElement.innerHTML === this.data.ans) 
        this.state = 'correct'
      else
        this.state = 'wrong'
    }
  ngOnInit(): void {
  }

}
