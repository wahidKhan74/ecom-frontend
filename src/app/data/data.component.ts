import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data ={
    str:'Hello Today is good day',
    nom : 4.143,
    date: new Date(),
    price: 497354.34
  }

  constructor() { }

  ngOnInit(): void {
  }

}
