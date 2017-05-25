import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[rotate]' })
export class RotateDirective implements OnInit {

    @Input() rotate: any;

    ngOnInit() {
        this.el.nativeElement.style.transform = 'rotate(' + this.rotate + 'deg)';
        this.el.nativeElement.style.backgroundColor = 'gold';
        this.el.nativeElement.style.display = 'inline-block';
        this.el.nativeElement.style.minWidth = '200px';
        this.el.nativeElement.style.textAlign = 'center';
    }

    constructor(private el: ElementRef) {
       
    }
}