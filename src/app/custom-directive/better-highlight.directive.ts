import { Directive, ElementRef, HostBinding, HostListener, INJECTOR, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent'
  @Input() highlightedColor = 'yellow'
  @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent'

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = this.highlightedColor
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor
  }
}
