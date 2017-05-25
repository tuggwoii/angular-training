import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective implements OnInit {

    @Input() highlight: any;

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = 'green';
        console.log(`Directive from support module`);
    }

    constructor(private el: ElementRef) {
       
    }
}