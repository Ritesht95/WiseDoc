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
      Username: Username,
      Password: Password,
      Type: true
    };
    return this._http
      .post(environment.apiURL + 'User/login', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }
}