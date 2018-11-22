import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public scheduleObj = {
    hospitalId: '',
    date: '',
    time: '',
  };
  public allHospitalsArr = [];

  constructor(public doctorService: DoctorService) { }

  ngOnInit() {

    this.doctorService.getAllHospitals().subscribe(
      res => {
        if (res.status === 200) {
          this.allHospitalsArr = res.data;
        }
      }
    );

  }

  addSchedule() {
    this.doctorService.addSchedule(this.scheduleObj).subscribe(
      res => {
        if (res.status === 200) {
          alert('Schdule added successfully');
        } else {
          alert('Oops! Failed to add schedule');
        }
      }
    );
  }

}
