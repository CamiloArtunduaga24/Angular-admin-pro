import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  public pruebita: string[] = ['Huevos', 'Chorizo', 'Chocolate'];

  constructor() { }

  ngOnInit(): void {
  }

}
