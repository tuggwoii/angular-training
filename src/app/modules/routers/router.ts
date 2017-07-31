import { Injectable, NgModule } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { RouteChapterComponent } from '../../components/chapters/route/route-chapter.component';
import { RouteParameterComponent } from '../../components/chapters/route/route-params.component';
import { NgModuleChapterComponent } from '../../components/chapters/ngmodule/ngmodule-chapter.component';
import { DependencyChapterComponent } from '../../components/chapters/dependency/dependency-chapter.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { AnimationComponent } from "app/components/chapters/route/animation.component";
import { SubRouteComponent } from "app/components/chapters/route/sub-route/sub-route.component";
import { RouteChapterRoutes } from "app/routes/route-chapter.routes";
import { AdminRoutes } from "app/routes/admin.routes";
import { UnAuthorizeComponent } from "app/components/unauthorize/unauthorize.component";
import { Resolver } from "app/services/resolver";
import { InjectTreeComponent } from "app/components/chapters/dependency/components/inject-tree/inject-tree.component";
import { AnatomyChapterComponent } from "app/components/chapters/anatomy/anatomy-chapter.component";
import { DeploymentChapterComponent } from "app/components/chapters/deployment/deploymeny-chapter.component";

const routes: Routes = [
    /*
    {
        path: 'routing',
        component: RouteChapterComponent,
        data: { title: 'ROUTING & NAVIGATION' },
        children: [
            {
                path: 'sub',
                component: SubRouteComponent
            }
        ]
    },*/
    RouteChapterRoutes,
    AdminRoutes,
    {
        path: 'ngmodule',
        component: NgModuleChapterComponent,
        data: { title: 'NGMODULES' }
    },
    {
        path: 'dependency',
        component: DependencyChapterComponent,
        data: { title: 'HIERARCHICAL DEPENDENCY INJECTORS' },
        children: [
            { path: 'inject', component: InjectTreeComponent}
        ]
    },
    {
        path: 'routes/:id',
        component: RouteParameterComponent,
        data: { title: 'ROUTING WITH ID' },
        resolve: {
            predata: Resolver
        }
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
        path: 'animation',
        component: AnimationComponent,
        data: { title: 'ANIMATION' }
    },
    {
        path: 'anatomy',
        component: AnatomyChapterComponent,
        data: { title: 'ANATOMY' }
    },
    {
        path: 'deployment',
        component: DeploymentChapterComponent,
        data: { title: 'DEPLOYMENT' }
    },
    {
        path: 'unauthorize',
        component: UnAuthorizeComponent,
        data: { title: 'PERMISSION DENIED' }
    },
    {
        path: 'lazy',
        loadChildren: 'app/modules/lazy/lazy.module#LazyModule'
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: { title: 'RESOURCES NOT FOUND' }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)//, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }