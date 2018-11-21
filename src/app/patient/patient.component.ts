import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  public objPatient = {
    patientId : 'new',
    name: '',
    dob: '',
    contactNo: '',
    gender: 'M',
    address: '',
    email: ''
  };

  public patientArr = [
    {
      patientId : 'new',
      name: 'Vishant',
      dob: '28/7/1997',
      contactNo: '1029384756',
      gender: 'M',
      address: 'sdkjbvksdjb',
      email: 'vishantakhani@wisedoc.com'
    },
    {
      patientId : 'new',
      name: 'Vishant',
      dob: '28/7/1997',
      contactNo: '1029384756',
      gender: 'M',
      address: 'sdkjbvksdjb',
      email: 'vishantakhani@wisedoc.com'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    alert(this.objPatient.gender);
  }

}
