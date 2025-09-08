import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { LinksComponent } from "./pages/links/links.component";

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'links',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'links'
      },
      {
        path: 'links',
        component: LinksComponent
      }
    ]
  }
];
