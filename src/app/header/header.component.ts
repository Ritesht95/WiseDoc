import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public fullName ;

  constructor(session: SessionService) {
    if (session.getUserType() === 'Doctor') {
      this.fullName = session.getName();
    } else if (session.getUserType() === 'Hospital') {
      this.fullName = session.getHName();
    } else {
      this.fullName = 'Ritesh';
    }
  }

  ngOnInit() {
  }

}
