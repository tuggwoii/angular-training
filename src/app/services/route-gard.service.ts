import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class RouteGuard implements CanActivate {

    public isActivate: boolean;

    constructor(private router: Router) {
       
    }

    canActivate() {
        //put logic here
        if (!this.isActivate) {
            this.router.navigate(['/unauthorize']);
        }
        return this.isActivate;
    }
}