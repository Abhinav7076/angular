import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

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

  constructor() { }
  checkAnswer(){
      console.log(this.data)
      if(this.optionSelected1.nativeElement.innerHTML === this.data.ans) 
        this.state = 'correct'
      else
        this.state = 'wrong'
      setTimeout(()=> { 
        this.idx.emit(this.data.idx+1)
        this.state='normal'
       }, 1000)
      
      // this.idx.emit(this.data.idx+1)
    }
  incrementIndex(){
    
  }
  ngOnInit(): void {
  }

}
