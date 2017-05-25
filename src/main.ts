import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from "@angular/platform-browser/src/browser";
import { AppModule } from './app/app.module';
import { TakModule } from './app/modules/tak/tak.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
setTimeout(function() {
    platformBrowserDynamic().bootstrapModule(AppModule);
    //platformBrowser().bootstrapModuleFactory(AppModuleFactory)
}, 500);

