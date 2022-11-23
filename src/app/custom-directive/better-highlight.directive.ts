import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent'

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = 'yellow'
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = 'transparent'
  }
}
