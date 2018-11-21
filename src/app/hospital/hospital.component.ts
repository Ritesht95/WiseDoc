import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  public objHospital: object = {
    name: 'Manish Hospital',
    email: 'contact@manishhospitals.com',
    contactNo: '1234567890',
    personToContact: 'Manish',
    password: 'HelloManish',
    address: 'Gali ke naake pe',
    active: true
  };

  public hospitalArr = [
    {
      name: 'Manish Hospital',
      email: 'contact@manishhospitals.com',
      contactNo: '1234567890',
      personToContact: 'Manish',
      password: 'HelloManish',
      address: 'Gali ke naake pe',
      active: true
    },
    {
      name: 'Manish Hospital',
      email: 'contact@manishhospitals.com',
      contactNo: '1234567890',
      personToContact: 'Manish',
      password: 'HelloManish',
      address: 'Gali ke naake pe',
      active: true
    }
  ];

  constructor(public doctorService: DoctorService) {}

  ngOnInit() {}

  submit() {
    this.doctorService.registerHospital(this.objHospital).subscribe(
      res => {
        if (res.status === 200) {
          alert('Hopital Added Successfully');
        } else {
          alert('Oops! Failed to Hospital');
        }
      }
    );
  }

}
