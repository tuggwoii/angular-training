import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { InjectTreeService } from "app/components/chapters/dependency/services/inject-tree.service";

@Component({
    selector: 'dependency-chapter',
    templateUrl: 'dependency-chapter.component.html',
    /*
    providers: [
        InjectTreeService
    ]*/
})

export class DependencyChapterComponent extends BaseComponent {

}