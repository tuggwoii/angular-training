import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from "app/modules/core/services/storage.service";

@Component({
    selector: 'lazy-component',
    templateUrl: 'lazy.component.html'
})

export class LazyComponent implements OnInit {

    public textInStorage: string;

    ngOnInit() {
        this.textInStorage = this.storage.getText();
        console.log('TEXT IN STORAGE SERVICE: ' + this.textInStorage);
    }

    constructor(private storage: StorageService) {

    }
}