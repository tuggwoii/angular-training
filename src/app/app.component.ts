import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { State } from './services/state';
import { Helpers } from './services/helpers';
import { Event } from './events/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public pageState = {
        ready: false
    };

    constructor(private router: Router, private route: ActivatedRoute, private state: State, private ev: Event, private helpers : Helpers) {
        this.router.events.subscribe((event) => {
            this.setPageHeader(event);
        });
        this.pageState.ready = true;
    }

    private setPageHeader(route): void {
        var isMatchAny = false;
        var notFound;
        this.router.config.filter((routeConfig) => {
            var actualRoute = route.urlAfterRedirects ? route.urlAfterRedirects : route.url;
            if (this.helpers.compareUrlWithRouteConfig(actualRoute, routeConfig.path)) {
                if (routeConfig.data) {
                    var title = routeConfig.data['title'];
                    this.state.setPageTitle(title);
                    isMatchAny = true;
                }
            }
            if (routeConfig.path === '**') {
                notFound = routeConfig;
            }
        });
        if (!isMatchAny) {
            console.log(notFound.data.title);
            this.state.setPageTitle(notFound.data? notFound.data.title : '');
        }
    }
}