import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // private IsServerLoggedIn = false;
  private IsDoctorLoggedIn = localStorage.getItem('DloggedIn');

  // private IsSServerLoggedIn = false;
  private IsHospitalLoggedIn = localStorage.getItem('HloggedIn');

  private UserID;
  private Email;
  private UserType;
  private Name;

  private HUserID;
  private HEmail;
  private HName;

  constructor(private http: Http, private router: Router) {}

  getDoctorLoggedIn() {
    this.IsDoctorLoggedIn = localStorage.getItem('DloggedIn');
    return this.IsDoctorLoggedIn;
  }

  getHospitalLoggedIn() {
    this.IsHospitalLoggedIn = localStorage.getItem('HloggedIn');
    return this.IsHospitalLoggedIn;
  }

  setDoctorLoggedIn(value: string) {
    if (value === 'true') {
      this.clearAll();
    }
    this.IsDoctorLoggedIn = value;
    localStorage.setItem('DloggedIn', value);
  }

  setHospitalLoggedIn(value: string) {
    if (value === 'true') {
      this.clearAll();
    }
    this.IsHospitalLoggedIn = value;
    localStorage.setItem('HloggedIn', value);
  }

  setValues(UserID: number, Email: string, UserType: string, Name: string) {
    if (UserType === 'seller') {
      this.HUserID = UserID;
      this.HName = Name;
      this.HEmail = Email;
      this.UserType = UserType;
      localStorage.setItem('sessionHospitalUserID', this.HUserID);
      localStorage.setItem('sessionHospitalName', this.HName);
      localStorage.setItem('sessionHospitalEmail', this.HEmail);
      localStorage.setItem('sessionUserType', this.UserType);
    } else {
      this.UserID = UserID;
      this.Name = Name;
      this.Email = Email;
      this.UserType = UserType;
      localStorage.setItem('sessionDoctorUserID', this.UserID);
      localStorage.setItem('sessionDoctorName', this.Name);
      localStorage.setItem('sessionDoctorEmail', this.Email);
      localStorage.setItem('sessionUserType', this.UserType);
  }
}

  getName() {
    this.Name = localStorage.getItem('sessionName');
    return this.Name;
  }

  getUserID() {
    this.UserID = localStorage.getItem('sessionUserID');
    return this.UserID;
  }

  getEmail() {
    this.Email = localStorage.getItem('sessionEmail');
    return this.Email;
  }

  getUserType() {
    this.UserType = localStorage.getItem('sessionUserType');
    return this.UserType;
  }

  getHName() {
    this.HName = localStorage.getItem('sessionHospitalName');
    return this.HName;
  }

  getHUserID() {
    this.HUserID = localStorage.getItem('sessionHospitalUserID');
    return this.HUserID;
  }

  getHEmail() {
    this.HEmail = localStorage.getItem('sessionHospitalEmail');
    return this.HEmail;
  }

  logout(sleep = false) {
    if (this.getUserType() !== 'Hospital') {
      localStorage.removeItem('sessionUserID');
      localStorage.removeItem('sessionName');
      localStorage.removeItem('sessionEmail');
      localStorage.setItem('DloggedIn', 'false');
      this.setDoctorLoggedIn('false');
      if (sleep === false) {
        this.router.navigate(['login']);
      }
    } else {
      localStorage.removeItem('sessionHospitalUserID');
      localStorage.removeItem('sessionHospitalName');
      localStorage.removeItem('sessionHospitalEmail');
      localStorage.setItem('HloggedIn', 'false');
      this.setHospitalLoggedIn('false');
      if (sleep === false) {
        this.router.navigate(['login']);
      }
    }
  }

  clearAll() {
      localStorage.removeItem('sessionUserID');
      localStorage.removeItem('sessionName');
      localStorage.removeItem('sessionEmail');
      localStorage.setItem('DloggedIn', 'false');
      this.setDoctorLoggedIn('false');
      localStorage.removeItem('sessionHospitalUserID');
      localStorage.removeItem('sessionHospitalName');
      localStorage.removeItem('sessionHospitalEmail');
      localStorage.setItem('HloggedIn', 'false');
      this.setHospitalLoggedIn('false');
  }

}
