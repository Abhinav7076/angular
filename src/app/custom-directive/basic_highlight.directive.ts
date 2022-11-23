import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[basicHighlight]'
})
export class basicHighlight implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'coral'
    }
}