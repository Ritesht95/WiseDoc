import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private IsDocLoggedIn = JSON.parse(
    localStorage.getItem('DloggedIn' || 'false')
  );

  private UserID;
  private Name;
  private Type;

  constructor() {
    if (this.getDoctorLoggedIn() === 'true') {
      this.setFromLocalStorage();
    }
  }

  getDoctorLoggedIn() {
    this.IsDocLoggedIn = localStorage.getItem('DloggedIn');
    return this.IsDocLoggedIn;
  }

  setDocLoggedIn(
    UserID: number,
    Name: string,
    Type: string
  ) {
    localStorage.setItem('DloggedIn', 'true');
    this.IsDocLoggedIn = 'true';
    this.setValues(UserID, Name, Type);
  }

  setValues(UserID: number, Name: string, Type: string) {
    this.UserID = UserID;
    this.Name = Name;
    this.Type = Type;
    localStorage.setItem('sessionDUserID', this.UserID);
    localStorage.setItem('sessionDName', this.Name);
    localStorage.setItem('sessionUserType', this.Type);
  }

  setFromLocalStorage() {
    this.UserID = localStorage.getItem('sessionDUserID');
    this.Name = localStorage.getItem('sessionDName');
    this.Type = localStorage.getItem('sessionUserType');
  }

  getUserID() {
    this.UserID = localStorage.getItem('sessionDUserID');
    return this.UserID;
  }

  getName() {
    this.Name = localStorage.getItem('sessionDName');
    return this.Name;
  }

  getType() {
    this.Type = localStorage.getItem('sessionUserType');
    return this.Type;
  }

  logoutUser() {
    localStorage.removeItem('sessionDUserID');
    localStorage.removeItem('sessionDName');
    localStorage.removeItem('sessionUserType');
    localStorage.setItem('DloggedIn', 'false');
    this.IsDocLoggedIn = 'false';
  }
}
