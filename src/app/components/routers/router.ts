import { Injectable } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { RouteChapterComponent } from '../../components/route-chapter/route-chapter.component';
import { RouteIdComponent } from '../../components/route-chapter/route-id.component';
import { NgModuleChapterComponent } from '../../components/ngmodule/ngmodule.component';
import { DependencyChapterComponent } from '../../components/dependency/dependency.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';

@Injectable()
export class AppRouter {
    static routes: Routes = [
        {
            path: 'routing',
            component: RouteChapterComponent,
            data: { title: 'ROUTING' }
        },
        {
            path: 'ngmodule',
            component: NgModuleChapterComponent,
            data: { title: 'NGMODULES' }
        },
        {
            path: 'dependency',
            component: DependencyChapterComponent,
            data: { title: 'HIERARCHICAL DEPENDENCY INJECTORS' }
        },
        {
            path: 'routes/:id',
            component: RouteIdComponent,
            data: { title: 'ROUTING WITH ID' }
        },
        {
            path: '',
            component: ContentComponent,
            data: { title: 'TABEL OF CONTENTS' }
        },
        {
            path: 'redirect',
            redirectTo: '/routing',
            pathMatch: 'full'
        },
        {
            path: '**',
            component: NotFoundComponent,
            data: { title: 'RESOURCES NOT FOUND' }
        }
    ];
}