import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(public _http: Http) {}

  login(Username: string, Password: string, Type: boolean) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    const data: object = {
      email: Username,
      password: Password,
      type: true
    };
    return this._http
      .post(environment.apiURL + 'User/login', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  registerHospital(hospitalObj) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    const data: object = hospitalObj;
    return this._http
      .post(environment.apiURL + 'Doctor/registerHospital', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  updateHospital(hospitalObj) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    const data: object = hospitalObj;
    return this._http
      .post(environment.apiURL + 'Doctor/updateHospital', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  deleteHospital(id) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    return this._http
      .post(environment.apiURL + 'Doctor/deleteHospital?id=' + id, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  getTodaysAppointments() {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    const data: object = { startDate: new Date(), endDate: new Date() };
    return this._http
      .post(environment.apiURL + 'Doctor/appointment', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  getAllHospitals() {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    return this._http
      .get(environment.apiURL + 'User/allhospitals', options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  addSchedule(schduleObj) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    const data: object = schduleObj;
    return this._http
      .post(environment.apiURL + 'Doctor/addSchdule', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }
}
