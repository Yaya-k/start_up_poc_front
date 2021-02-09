import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import {UserHomePageComponent} from './components/user-home-page/user-home-page.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {ManangerDashboardComponent} from './components/mananger-dashboard/mananger-dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'homeUser', component: UserHomePageComponent},
  {path: 'adminDashboard', component: AdminDashboardComponent},
  {path: 'managerDashboard', component: ManangerDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
