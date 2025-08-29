import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes')
      .then(m => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.routes')
      .then(m => m.DASHBOARD_ROUTES),
      canActivate: [authGuard]
  },
  {
    path: '',
    loadChildren: () => import('./modules/landing/auth.routes')
      .then(m => m.LANDING_PAGE_ROUTES)
  },
];
