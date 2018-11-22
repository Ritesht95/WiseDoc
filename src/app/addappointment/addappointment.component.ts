import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { HospitalService } from '../hospital.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent implements OnInit {
  appointmentObj = {
    patientId: '',
    hospitalId: '2',
    scheduleId: '',
    description: ''
  };
  allPatientsArr = [];
  allScheduleArr = [];

  constructor(
    public doctorService: DoctorService,
    public hospitalService: HospitalService,
    public session: SessionService
  ) {}

  ngOnInit() {
    this.hospitalService.getAllPatients().subscribe(res => {
      this.allPatientsArr = res.data;
      this.hospitalService
      .getAllSchedule(this.session.getHUserID())
      .subscribe(res1 => {
        this.allScheduleArr = res1.data;
      });
    });
  }

  addAppointment() {
    console.log(this.appointmentObj);
    this.hospitalService.addAppointment(this.appointmentObj).subscribe(
      res => {
        if (res.status === 200) {
          alert('Appointment added successfully');
        } else {
          alert('Oops! Appointment couldn\'t be  added');
        }
      }
    );
  }
}
