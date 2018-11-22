import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatienthistoryComponent } from './patienthistory/patienthistory.component';
import { PatientComponent } from './patient/patient.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', canActivate : [AuthGuard], component: DashboardComponent},
  { path: 'hospital', component: HospitalComponent},
  { path: 'schedule', component: ScheduleComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'patientHistory', component: PatienthistoryComponent},
  { path: 'patient', component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
