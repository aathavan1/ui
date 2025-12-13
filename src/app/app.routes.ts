import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'dashboard', loadComponent: () => import("../app/dashboard/dashboard.component").then((t) => t.DashboardComponent) },
    { path: '**', redirectTo: "login", pathMatch: "full" }
];


