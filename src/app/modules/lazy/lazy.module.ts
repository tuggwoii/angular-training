import { NgModule } from '@angular/core';
import { LazyComponent } from './components/lazy.component';
import { routing } from './lazy.routing';
import { CoreModule } from "app/modules/core/core.module";

@NgModule({
    imports: [
        routing,
        CoreModule
    ],
    declarations: [LazyComponent]
})
export class LazyModule { }