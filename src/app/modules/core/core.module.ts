import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StorageService } from "app/modules/core/services/storage.service";

@NgModule({
    imports: [
        
    ],
    exports: [

    ],
    declarations: [
        
    ],
    providers: [
        StorageService
    ]
})
export class CoreModule {

    /*
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }*/
}