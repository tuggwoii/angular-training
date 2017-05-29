import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//modules
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/routers/router';
import { SupportModule } from "app/modules/supports/support.module";
import { CoreModule } from "app/modules/core/core.module";

//services
import { State } from './services/state';
import { Helpers } from './services/helpers';
import { Event } from './events/event';
import { Broadcaster } from './events/broadcaster';
import { RouteGuard } from "app/services/route-gard.service";
import { Resolver } from "app/services/resolver";

//components
import { AppComponent } from './app.component';
import { SubRouteComponent } from "app/components/chapters/route/sub-route/sub-route.component";
import { AdminComponent } from "app/components/admin/admin.component";
import { ContentComponent } from './components/content/content.component';
import { RouteChapterComponent } from './components/chapters/route/route-chapter.component';
import { NgModuleChapterComponent } from './components/chapters/ngmodule/ngmodule-chapter.component';
import { DependencyChapterComponent } from './components/chapters/dependency/dependency-chapter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouteParameterComponent } from './components/chapters/route/route-params.component';
import { AnimationComponent } from "app/components/chapters/route/animation.component";
import { UnAuthorizeComponent } from "app/components/unauthorize/unauthorize.component";
import { TitleComponent } from "app/components/title/title.component";
import { InjectTreeComponent } from "app/components/chapters/dependency/components/inject-tree/inject-tree.component";

//directives
import { HighlightDirective } from "app/directives/highlight.directive";
import { InjectTreeService } from "app/components/chapters/dependency/services/inject-tree.service";

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        RouteChapterComponent,
        RouteParameterComponent,
        NotFoundComponent,
        NavigationComponent,
        NgModuleChapterComponent,
        DependencyChapterComponent,
        AnimationComponent,
        SubRouteComponent,
        AdminComponent,
        UnAuthorizeComponent,
        HighlightDirective,
        TitleComponent,
        InjectTreeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SupportModule,
        CoreModule
    ],
    providers: [
        State,
        Event,
        Broadcaster,
        Helpers,
        RouteGuard,
        Resolver,
        //InjectTreeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

