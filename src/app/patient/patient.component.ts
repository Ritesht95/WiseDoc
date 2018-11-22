import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  public objPatient = {
    patientId: '',
    name: '',
    dob: '',
    cno: '',
    gender: '',
    address: ''
  };
  public editPatientTask = false;
  public addPatientTask = true;
  public updateId = null;

  public patientArr = [];

  constructor(public doctorService: DoctorService, public hospitalService: HospitalService) {}

  ngOnInit() {
    this.hospitalService.getAllPatients().subscribe(
      res => {
        this.patientArr = res.data;
      }
    );
  }

  submitForm() {
    console.log(this.objPatient);
    this.hospitalService.registerPatient(this.objPatient).subscribe(
      res => {
        alert(res.status);
        console.log(res.data);
      }
    );
  }

  editPatient(objEdit) {
    this.objPatient = objEdit;
    this.objPatient.dob = objEdit.dob.split(' ')[0];
    this.updateId = objEdit.id;
    this.editPatientTask = true;
    this.addPatientTask = false;
  }

  deletePatient(id) {
    this.hospitalService.deletePatient(id).subscribe(res => {
      if (res.status === 200) {
        alert('Patient deleted successfully');
      } else {
        alert('Oops! Failed to delete Hospital');
      }
    });
  }

  update() {
    if (this.updateId !== null) {
      this.hospitalService.updatePatient(this.objPatient).subscribe(res => {
        if (res.status === 200) {
          alert('Patient updated Successfully');
        } else {
          alert('Oops! Failed to update Hospital');
        }
      });
    }
  }
}
