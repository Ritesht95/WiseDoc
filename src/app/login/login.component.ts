import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public docService: DoctorService) { }

  ngOnInit() {
  }

  login(Username: string, Password: string, Type: boolean) {
    this.docService.login(Username, Password, true).subscribe(
      res => {
        if (res.status === 200) {
          alert(res.status);
        } else {
          alert(res.data);
        }
      }
    );
  }

}
