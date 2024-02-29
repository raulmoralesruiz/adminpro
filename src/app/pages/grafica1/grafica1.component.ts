import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {
  public labels1: string[] = [
    'Pan',
    'Chicharrones',
    'Cerveza',
  ];
  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      {
        data: [10, 22, 15],
        backgroundColor: ['orange', 'teal', 'black']
      },
    ],
  };

}
