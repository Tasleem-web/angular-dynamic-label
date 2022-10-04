import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  buttonTriggered(val: any) {
    console.log(val);
  }
}
