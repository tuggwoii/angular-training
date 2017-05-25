import { NgModule } from '@angular/core';
import { RotateDirective } from "app/modules/supports/directives/rotate.directive";
import { HighlightDirective } from "app/modules/supports/directives/highlight.directive";
import { TitleComponent } from "app/modules/supports/components/title/title.component";

@NgModule({

    declarations: [
        RotateDirective,
        HighlightDirective,
        //TitleComponent
    ],
    exports: [
        RotateDirective,
        HighlightDirective,
        //TitleComponent
    ]
})
export class SupportModule { }