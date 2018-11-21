import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  accordionItemCount = 0;

  public appointmentsArr = [
    {
      appointmentId: 1,
      patientId: 11,
      patientName: 'ABCD EFG',
      time: '10:00am',
      description: 'kjdbsvksdbkjvb sdkjvbksdb sdkjvbskdj v sdkjvbksd vksbdvk sdkjv sdkjv kjsd vksd vkj sdkjbvkjsdhkhksdjbvkjsd'
    },
    {
      appointmentId: 2,
      patientId: 12,
      patientName: 'ABCD EFG',
      time: '10:00am',
      description: 'kjdbsvksdbkjvb sdkjvbksdb sdkjvbskdj v sdkjvbksd vksbdvk sdkjv sdkjv kjsd vksd vkj sdkjbvkjsdhkhksdjbvkjsd'
    },
    {
      appointmentId: 3,
      patientId: 13,
      patientName: 'ABCD EFG',
      time: '10:00am',
      description: 'kjdbsvksdbkjvb sdkjvbksdb sdkjvbskdj v sdkjvbksd vksbdvk sdkjv sdkjv kjsd vksd vkj sdkjbvkjsdhkhksdjbvkjsd'
    },
    {
      appointmentId: 4,
      patientId: 14,
      patientName: 'ABCD EFG',
      time: '10:00am',
      description: 'kjdbsvksdbkjvb sdkjvbksdb sdkjvbskdj v sdkjvbksd vksbdvk sdkjv sdkjv kjsd vksd vkj sdkjbvkjsdhkhksdjbvkjsd'
    },
    {
      appointmentId: 5,
      patientId: 15,
      patientName: 'ABCD EFG',
      time: '10:00am',
      description: 'kjdbsvksdbkjvb sdkjvbksdb sdkjvbskdj v sdkjvbksd vksbdvk sdkjv sdkjv kjsd vksd vkj sdkjbvkjsdhkhksdjbvkjsd'
    }
  ];

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
