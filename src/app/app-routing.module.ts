import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  
  { path: '', component: LoginComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'det/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
