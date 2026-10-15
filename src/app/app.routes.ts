import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'dashboard',
        //LazyLoading
        loadComponent: () => 
            import('./features/dashboard/dashboard-page/dashboard-page').then(m => m.DashboardPage)
    }
];
