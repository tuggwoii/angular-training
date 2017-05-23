import { RouterModule, Route } from '@angular/router';
import { AdminComponent } from "app/components/admin/admin.component";
import { RouteGuard } from "app/services/route-gard.service";

export const AdminRoutes: Route = {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RouteGuard],
};
