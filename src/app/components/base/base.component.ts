import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from "@angular/router";
import { State } from '../../services/state';

@Component({

})

export class BaseComponent implements OnInit {

    public id: number;
    public title: string;
    public isRoot: boolean;
    private routeSubscribe: any;

    ngOnInit() {
        this.title = this.state.getPageTitle();
        this.route.data.subscribe
        this.routeSubscribe = this.route.params.subscribe(params => {
            this.id = + params['id'];
        });
    }

    constructor(public state: State, public route: ActivatedRoute) {
        
    }
}