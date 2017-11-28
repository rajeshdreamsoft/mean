import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guard';

import { IndexComponent } from './IndexComponent';
import { LoginComponent } from './LoginComponent';
import { NewUserComponent } from './NewUserComponent';
import { ProfileComponent } from './UserProfile/ProfileComponent';
export const router: Routes = [
    { path: '', redirectTo: 'Index', pathMatch: 'full'  },
    { path: 'Login', component: LoginComponent },
    { path: 'NewUser', component: NewUserComponent },
    { path: 'Profile' , component: ProfileComponent, canActivate: [AuthGuard] },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);