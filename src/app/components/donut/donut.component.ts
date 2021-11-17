import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  @Input() title: string = 'sin titulo';

  public colors: Color[] =
    [
      { backgroundColor: ['#9e120e', '#ff5800', '#f02059'] }
    ]

  @Input('labels') doughnutChartLabels: Label[] = ['label1', 'label2', 'label3'];
  @Input('data') doughnutChartData: MultiDataSet
    = [
      [350, 450, 100],
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
