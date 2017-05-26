import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { State } from './services/state';
import { Helpers } from './services/helpers';
import { Event } from './events/event';
import { StorageService } from "app/modules/core/services/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public pageState = {
        ready: false
    };

    constructor(private router: Router, private route: ActivatedRoute, private state: State, private ev: Event, private helpers: Helpers, private storage: StorageService) {
        this.router.events.subscribe((event) => {
            this.setPageHeader(event);
        });
        this.pageState.ready = true;

        var text = 'Save This Text To Storage';
        this.storage.saveText(text);
        console.log('SET TEXT TO STOGARE SERVICE AS: ' + text);
    }

    private setPageHeader(route): void {
        let isMatchAny = false;
        let notFound;
        this.router.config.filter((routeConfig) => {
            let actualRoute = route.urlAfterRedirects ? route.urlAfterRedirects : route.url;
            if (this.helpers.compareUrlWithRouteConfig(actualRoute, routeConfig.path, routeConfig.children)) {
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
            this.state.setPageTitle(notFound.data? notFound.data.title : '');
        }
    }
}