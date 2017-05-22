import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouter } from './components/routers/router';
import { ContentComponent } from './components/content/content.component';
import { RouteChapterComponent } from './components/route-chapter/route-chapter.component';
import { NgModuleChapterComponent } from './components/ngmodule/ngmodule.component';
import { DependencyChapterComponent } from './components/dependency/dependency.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouteIdComponent } from './components/route-chapter/route-id.component';
import { State } from './services/state';
import { Helpers } from './services/helpers';
import { Event } from './events/event';
import { Broadcaster } from './events/broadcaster';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        RouteChapterComponent,
        RouteIdComponent,
        NotFoundComponent,
        NavigationComponent,
        NgModuleChapterComponent,
        DependencyChapterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(AppRouter.routes)
    ],
    providers: [
        State,
        Event,
        Broadcaster,
        Helpers
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

