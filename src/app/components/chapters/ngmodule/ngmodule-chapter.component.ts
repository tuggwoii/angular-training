import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { StorageService } from "app/modules/core/services/storage.service";
import { Router, ActivatedRoute } from "@angular/router";
import { State } from "app/services/state";

@Component({
    selector: 'ngmodule-chapter',
    templateUrl: 'ngmodule-chapter.component.html'
})

export class NgModuleChapterComponent extends BaseComponent implements OnInit  {

    public textInStorage: string;

    ngOnInit() {
        this.textInStorage = this.storage.getText();
        console.log('TEXT IN STORAGE SERVICE: ' + this.textInStorage);
        super.ngOnInit();
    }

    constructor(private router: Router, public state: State, public route: ActivatedRoute, private storage: StorageService) {
        super(state, route);

    }
}