import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public docService: DoctorService, public session: SessionService) {}

  ngOnInit() {}

  login(Username: string, Password: string, Type: string) {
    alert(Type);
    const typeToSend = (Type === 'D') ? true : false;
    this.docService.login(Username, Password, typeToSend).subscribe(
      res => {
        if (res.status === 200) {
            this.session.setValues(res.data['userId'], res.data['email'], res.data['name'], Type);
        } else {
          alert('Login Failed');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
