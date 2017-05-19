import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { State } from './services/state';
import { Event } from './events/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public title: string;
    public pageState = {
        ready: false
    };

    constructor(private router: Router, private route: ActivatedRoute, private state: State, private ev: Event) {
        router.events.subscribe((even) => {
            this.setPageHeader(even);
        });
        this.pageState.ready = true;
    }

    private setPageHeader(route): void {
        this.router.config.filter((routeConfig) => {
            if (route.url == '/' + routeConfig.path) {
                this.title = routeConfig.data['title'];
                this.state.setPageTitle(this.title);
            }
        });
    }
}