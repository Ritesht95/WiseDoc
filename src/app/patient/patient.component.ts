import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  public objPatient = {};
  public editPatientTask = false;
  public addPatientTask = true;
  public updateId = null;

  public patientArr = [
    {
      patientId: 'new',
      name: 'Vishant',
      dob: '28/7/1997',
      contactNo: '1029384756',
      gender: 'M',
      address: 'sdkjbvksdjb',
      email: 'vishantakhani@wisedoc.com'
    },
    {
      patientId: 'new',
      name: 'Vishant',
      dob: '28/7/1997',
      contactNo: '1029384756',
      gender: 'M',
      address: 'sdkjbvksdjb',
      email: 'vishantakhani@wisedoc.com'
    }
  ];

  constructor(public doctorService: DoctorService) {}

  ngOnInit() {}

  submitForm() {
    // Add Patient
  }

  editPatient(objEdit) {
    this.objPatient = objEdit;
    this.updateId = objEdit.id;
    this.editPatientTask = true;
    this.addPatientTask = false;
  }

  deletePatient(id) {
    this.doctorService.deleteHospital(id).subscribe(res => {
      if (res.status === 200) {
        alert('Hospital deleted successfully');
      } else {
        alert('Oops! Failed to delete Hospital');
      }
    });
  }

  update() {
    if (this.updateId !== null) {
      this.doctorService.updateHospital(this.objPatient).subscribe(res => {
        if (res.status === 200) {
          alert('Hopital updated Successfully');
        } else {
          alert('Oops! Failed to update Hospital');
        }
      });
    }
  }
}
