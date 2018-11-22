import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent implements OnInit {

  appointmentObj = {};
  allPatientsArr = [];
  allScheduleArr = [];

  constructor() { }

  ngOnInit() {
  }

}
