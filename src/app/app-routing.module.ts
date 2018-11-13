import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DrdashboardComponent } from './drdashboard/drdashboard.component';
import { AddhospitalComponent } from './addhospital/addhospital.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'drdashboard', component: DrdashboardComponent},
  { path: 'hospital', component: AddhospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
