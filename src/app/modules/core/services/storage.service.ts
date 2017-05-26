import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    private text: string = 'EMPTY';

    public getText(): string {              
        return this.text;
    }

    public saveText(text: string): void {
        this.text = text;
    }
}