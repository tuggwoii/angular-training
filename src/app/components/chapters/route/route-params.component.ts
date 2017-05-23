import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from '../../base/base.component';
import { State } from '../../../services/state';


@Component({
    selector: 'route-params',
    templateUrl: 'route-params.component.html'
})

export class RouteParameterComponent extends BaseComponent {

    public params1: string
    public params2: string
    private paramsSubscribe: any;
    public predata: any;

    ngOnInit() {
        super.ngOnInit();
        this.paramsSubscribe = this.route.params.subscribe((params) => {
            this.params1 = params['opt1'];
            this.params2 = params['opt2'];
        });
        this.predata = this.route.snapshot.data['predata'];
    }

    constructor(public state: State, public route: ActivatedRoute) {
        super(state, route);

    }
}