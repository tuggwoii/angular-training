import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Http } from "@angular/http";

@Injectable()
export class Resolver implements Resolve<any> {

    constructor(private http: Http, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/api/data').subscribe((data) => {
                setTimeout(() => {
                    resolve(data.json());
                }, 0);
            });
        });
    }
}