import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { dataService } from '../data.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color' : 'white',
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

  constructor(private dataService: dataService, private router: Router) { }

  checkAnswer(){
      this.dataService.disable = true
      console.log("service "+this.dataService.idx+" "+this.dataService.disable)
      if(this.optionSelected1.nativeElement.innerHTML === this.data.ans) {
        this.state = 'correct'
        this.dataService.score += 1
      }
      else
        this.state = 'wrong'
      this.playSound()
      setTimeout(()=> { 
        if(this.dataService.idx===2)
        this.router.navigate(['/score'])
        this.dataService.idx += 1
        this.state='normal'
        this.dataService.disable=false
       }, 2000)
    }
  
  playSound(){
      let audio = new Audio();
      if(this.state === 'correct')
        audio.src = "../../../assets/correct-6033.mp3"
      else
        audio.src = "../../../assets/wronganswer-37702.mp3"
      audio.load();
      audio.play();
    }
  ngOnInit(): void {
  }

}
