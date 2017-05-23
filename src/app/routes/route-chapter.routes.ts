import { RouterModule, Route } from '@angular/router';
import { RouteChapterComponent } from "app/components/chapters/route/route-chapter.component";
import { SubRouteComponent } from "app/components/chapters/route/sub-route/sub-route.component";

export const RouteChapterRoutes: Route = {
    path: 'routing',
    component: RouteChapterComponent,
    data: { title: 'ROUTING & NAVIGATION' },
    children: [
        {
            path: 'sub',
            component: SubRouteComponent,
            children: [
                {
                    path: ':id',
                    component: SubRouteComponent
                }
            ]
        }
    ]
};
