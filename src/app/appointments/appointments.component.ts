import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  accordionItemCount = 0;

  public appointmentsArr = [];

  constructor(public doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getTodaysAppointments().subscribe(
      res => {
        if (res.status === 200) {
          this.appointmentsArr = res.data;
        }
      }
    );
  }

}
