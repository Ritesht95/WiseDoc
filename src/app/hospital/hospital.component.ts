import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  public objHospital = {
      id: '',
      name: '',
      email: '',
      contactNo: '',
      personToContact: '',
      password: '',
      address: ''
  };
  public editHospitalTask = false;
  public addHospitalTask = true;
  private updateId;

  public hospitalArr = [];

  constructor(public doctorService: DoctorService) {}

  ngOnInit() {
    this.doctorService.getAllHospitals().subscribe(
      res => {
        this.hospitalArr =  res.data;
      }
    );
  }

  submit() {
    this.doctorService.registerHospital(this.objHospital).subscribe(res => {
      if (res.status === 200) {
        alert('Hopital Added Successfully');
      } else {
        alert('Oops! Failed to add Hospital');
      }
    });
  }

  update() {
    if (this.updateId !== null) {
      this.doctorService.updateHospital(this.objHospital).subscribe(res => {
        if (res.status === 200) {
          alert('Hopital updated Successfully');
        } else {
          alert('Oops! Failed to update Hospital');
        }
      });
    }
  }

  editHospital(objEdit) {
    this.objHospital = objEdit;
    this.updateId = objEdit.hospitalId;
    this.editHospitalTask = true;
    this.addHospitalTask = false;
  }

  deleteHospital(id) {
    this.doctorService.deleteHospital(id).subscribe(
      res => {
        if (res.status === 200) {
          alert('Hospital deleted successfully');
        } else {
          alert('Oops! Failed to delete Hospital');
        }
      }
    );
  }
}
