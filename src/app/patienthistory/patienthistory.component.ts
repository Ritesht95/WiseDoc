import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patienthistory',
  templateUrl: './patienthistory.component.html',
  styleUrls: ['./patienthistory.component.css']
})
export class PatienthistoryComponent implements OnInit {
  patientId: string;
  patientObj = { Name: 'ABCD EFG' };
  historyArr = [];
  today = new Date();
  jstoday = '';
  historyObj = { date: '20th Nov, 2018', time: '10:00', patientId: this.patientId, description: 'sdjbvhjksdbv' };

  constructor(private route: ActivatedRoute) {}

  addHistory() {
    this.historyArr.push(this.historyObj);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.patientId = params['id'];
  });
  }
}
