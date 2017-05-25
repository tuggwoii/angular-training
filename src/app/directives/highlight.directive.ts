import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective implements OnInit {

    @Input() highlight: any;

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = this.highlight;
        console.log(`Directive from root module`);
    }

    constructor(private el: ElementRef) {
       
    }
}