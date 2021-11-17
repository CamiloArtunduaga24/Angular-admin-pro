import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1 = [[10, 15, 40]];

  public labels2: string[] = ['Chicha', 'Guarapo', 'Masato'];
  public data2 = [[35, 15, 50]];
  constructor() { }





}
