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
    public a: number = 1;

    ngOnInit() {
        this.title = this.state.getPageTitle();
        this.routeSubscribe = this.route.params.subscribe(params => {
            this.id = + params['id'];
        });
    }

    constructor(public state: State, public route: ActivatedRoute) {
        
    }
}