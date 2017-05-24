import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Router, ActivatedRoute } from "@angular/router";
import { State } from "app/services/state";
import { slideInDownAnimation } from '../../../animations/animation'
import { Resolver } from "app/services/resolver";

@Component({
    selector: 'route-chapter',
    templateUrl: 'route-chapter.component.html',
    animations: [
        slideInDownAnimation
    ],
    //host: { '[@routeAnimation]': '' }
})

export class RouteChapterComponent extends BaseComponent {

    constructor(private router: Router, public state: State, public route: ActivatedRoute) {
        super(state, route);

    }

    public navigateTo(url): void {
        this.router.navigate([url]);
    }

    public navigateWithParameter(url, id): void {
        this.router.navigate([url, id]);
    }

    public navigateWithParameters(url, id, opt1, opt2): void {
        this.router.navigate([url, id, { opt1: opt1, opt2: opt2}]);
    }
}