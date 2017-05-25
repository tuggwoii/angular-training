import { Injectable } from '@angular/core';

@Injectable()
export class State {

    private pageTitle: string;

    public getPageTitle(): string {
        return this.pageTitle;
    }

    public setPageTitle(pageTitle : string ): void {
        this.pageTitle = pageTitle;
    }
}