import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Broadcaster } from '../events/broadcaster';

@Injectable()
export class Event {

    private pageTitleEmitter: any;
   
    public events = {
        page: {
          update_title: 'UPDATE_PAGE_TITLE'
        }
    };

    public broadcast_chanel = {
        page: {
            title: 'PAGE_TITLE'
        }
    };

    constructor(private broadcaster: Broadcaster) {
        this.pageTitleEmitter = this.broadcaster.get(this.broadcast_chanel.page.title);

    }

    public updatePageTitle(title: string) {
        this.pageTitleEmitter.emit(this.events.page.update_title, title);
    }

    public delay(time): Promise<boolean> {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
    }
}