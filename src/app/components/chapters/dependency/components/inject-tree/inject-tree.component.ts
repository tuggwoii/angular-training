import { Component } from '@angular/core';
import { InjectTreeService } from "app/components/chapters/dependency/services/inject-tree.service";

@Component({
    selector: 'inject-tree-component',
    templateUrl: 'inject-tree.component.html',
    providers: [ 
      InjectTreeService 
    ]
})

export class InjectTreeComponent {

    constructor(private inject: InjectTreeService) {

    }
}