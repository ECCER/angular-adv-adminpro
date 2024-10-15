import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styles: ``
})
export class Grafica1Component {

  public labels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales'
  ];

  data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [10, 15, 40], backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
    ]
  }


}
