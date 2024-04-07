import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**' , pathMatch: 'full', redirectTo: 'home'}
  ]},
  {path: '**' , pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
