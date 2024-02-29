import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: ``
})
export class DonutComponent {
  @Input()
  public title: string = 'Sin título';
  @Input('labels')
  public doughnutChartLabels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];
  @Input('data')
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [1, 2, 3],
        backgroundColor: ['red', 'green', 'blue']
      },
    ],
  };
}
