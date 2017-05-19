import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouter } from './modules/routers/router';
import { ContentComponent } from './modules/content/content.component';
import { RouteChapterComponent } from './modules/route-chapter/route-chapter.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { State } from './services/state';
import { Event } from './events/event';
import { Broadcaster } from './events/broadcaster';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        RouteChapterComponent,
        NotFoundComponent,
        NavigationComponent
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
        Broadcaster
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

