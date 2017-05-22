import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from '../base/base.component';
import { State } from '../../services/state';


@Component({
    selector: 'route-chapter',
    templateUrl: 'route-id.component.html'
})

export class RouteIdComponent extends BaseComponent {

    constructor(public state: State, public route: ActivatedRoute) {
        super(state, route);

    }
}