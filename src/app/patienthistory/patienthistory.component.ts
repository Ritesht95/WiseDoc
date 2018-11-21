import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patienthistory',
  templateUrl: './patienthistory.component.html',
  styleUrls: ['./patienthistory.component.css']
})
export class PatienthistoryComponent implements OnInit {
  patientObj = { Name: 'ABCD EFG' };
  historyArr = [
    {Date: '20th Nov, 2018', Time: '10:00', patientId: 12, description: 'sdjbvhjksdbv'},
    {Date: '20th Nov, 2018', Time: '10:00', patientId: 12, description: 'sdjbvhjksdbv'},
    {Date: '20th Nov, 2018', Time: '10:00', patientId: 12, description: 'sdjbvhjksdbv'}
  ];
  historyObj = { Date: '20th Nov, 2018', Time: '10:00', patientId: 12, description: 'sdjbvhjksdbv' }

  constructor() {}

  addHistory() {
    this.historyArr.push(this.historyObj);
  }

  ngOnInit() {}
}
