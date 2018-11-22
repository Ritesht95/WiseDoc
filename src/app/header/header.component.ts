import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public fullName;

  constructor(public session: SessionService, public router: Router) {
    if (session.getUserType() === 'Doctor') {
      this.fullName = session.getName();
    } else if (session.getUserType() === 'Hospital') {
      this.fullName = session.getHName();
    } else {
      this.fullName = 'Ritesh';
    }
  }

  ngOnInit() {}

  logout() {
    this.session.logout();
    this.router.navigate(['login']);
  }
}
