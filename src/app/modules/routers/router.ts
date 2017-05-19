import { Injectable } from '@angular/core';
import { ContentComponent } from '../../modules/content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { RouteChapterComponent } from '../../modules/route-chapter/route-chapter.component';
import { NotFoundComponent } from '../../modules/not-found/not-found.component';

@Injectable()
export class AppRouter {
    static routes: Routes = [
        {
            path: 'routing',
            component: RouteChapterComponent,
            data: { title: 'ROUTING' }
        },
        { path: 'hero/:id', component: RouteChapterComponent },
        {
            path: '',
            component: ContentComponent,
            data: { title: 'TABEL OF CONTENTS' }
        },
        {
            path: 'redirect',
            redirectTo: '/',
            pathMatch: 'full'
        },
        { path: '**', component: NotFoundComponent }
    ];
}