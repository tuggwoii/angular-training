import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from '../../base/base.component';
import { State } from '../../../services/state';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { slideInDownAnimation } from '../../../animations/animation'

@Component({
    selector: 'route-params',
    templateUrl: 'animation.component.html',
    animations: [
        slideInDownAnimation
    ],
    host: { '[@routeAnimation]': '' }
})

export class AnimationComponent extends BaseComponent {

}