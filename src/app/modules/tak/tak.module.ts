import { NgModule } from '@angular/core';
import { TakComponent } from './tak.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        TakComponent
    ],
    bootstrap: [
        TakComponent
    ]

})
export class TakModule { }