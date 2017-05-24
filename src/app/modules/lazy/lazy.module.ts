import { NgModule } from '@angular/core';
import { LazyComponent } from './components/lazy.component';
import { routing } from './lazy.routing';

@NgModule({
    imports: [routing],
    declarations: [LazyComponent]
})
export class LazyModule { }