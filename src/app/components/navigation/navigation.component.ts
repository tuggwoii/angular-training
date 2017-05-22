import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'nav-component',
    templateUrl: 'navigation.component.html'
})

export class NavigationComponent {

    public isRoot : boolean;

    constructor(private router: Router) {
        this.router.events.subscribe((event: any) => {
            this.isRoot = false;
            if (event.url) {
                if ((event.urlAfterRedirects && event.urlAfterRedirects == '/')
                    || event.url == '/'
                    || event.url == '') {
                    this.isRoot = true;
                }
            }
        });
    }
}