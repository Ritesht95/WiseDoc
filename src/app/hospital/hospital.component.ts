import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  public objHospital = {};
  public editHospitalTask = false;
  public addHospitalTask = true;
  private updateId;

  public hospitalArr = [
    {
      id: 1,
      name: 'Manish Hospital',
      email: 'contact@manishhospitals.com',
      contactNo: '1234567890',
      personToContact: 'Manish',
      password: 'HelloManish',
      address: 'Gali ke naake pe',
      active: true
    },
    {
      id: 2,
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
    this.updateId = objEdit.id;
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
