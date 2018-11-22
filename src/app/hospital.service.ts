import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(public _http: Http) { }


  public registerPatient(patientObj) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    const data: object = patientObj;
    return this._http
      .post(environment.apiURL + 'Hospital/registerPatient', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  updatePatient(patientObj) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    const data: object = patientObj;
    return this._http
      .post(environment.apiURL + 'Hospital/updatePatient', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  deletePatient(id) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    return this._http
      .post(environment.apiURL + 'Hospital/deletePatient?id=' + id, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  getAllPatients() {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    return this._http
      .get(environment.apiURL + 'Hospital/allPatients', options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }
}
