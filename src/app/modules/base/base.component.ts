import { Component, Input } from '@angular/core';
import { State } from '../../services/state';

@Component({

})

export class BaseComponent {

    public title: string;

    constructor(private state: State) {
        this.title = this.state.getPageTitle();
    }
}