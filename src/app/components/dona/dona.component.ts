import { Component, Input } from '@angular/core';
import { ChartConfiguration, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {

  @Input()
  title: string = 'Sin titulo';

  // Doughnut
  @Input('label')
  public doughnutChartLabels: string[] = ['probando', 'try', 'test'];

  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450, 100 ], label: 'Series A', backgroundColor:['#6857E6', '#009FEE', '#F02059'] }
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

}
