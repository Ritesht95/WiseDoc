import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'hospital', component: HospitalComponent},
  { path: 'schedule', component: ScheduleComponent },
  { path: 'appointments', component: AppointmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
