import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  public objHospital: object = {
    Name: 'Manish Hospital',
    Email: 'contact@manishhospitals.com',
    ContactNo: '1234567890',
    PersonOfContact: 'Manish',
    Password: 'HelloManish',
    Address: 'Gali ke naake pe'
  };

  display() {
  alert(this.objHospital);
  }
  constructor() {}

  ngOnInit() {}
}
