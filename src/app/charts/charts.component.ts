import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './charts.component.html',
})
export class ChartsComponent {
  public chartOptions: AgChartOptions;
  constructor() {
    this.chartOptions = {
      data: [
        { month: 'Jan', sales: 500 },
        { month: 'Feb', sales: 550 },
        { month: 'Mar', sales: 980 },
        { month: 'Apr', sales: 470 },
        { month: 'Ma', sales: 580 },
        { month: 'June', sales: 430 },
        { month: 'Jul', sales: 600 },
        { month: 'Aug', sales: 580 },
        { month: 'Sep', sales: 620 },
        { month: 'Oct', sales: 400 },
        { month: 'Nov', sales: 590 },
        { month: 'Dec', sales: 888 },
      ],
      series: [
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'sales',
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          title: {
            text: 'Month of the year',
          },
        },
        {
          type: 'number',
          position: 'left',
          title: {
            text: 'Total Sales',
          },
          interval: { step: 200 },
        },
      ],
    };
  }
}
