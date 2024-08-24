import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [AgCharts],
  template: `
    <ag-charts
      [options]="options"
      class="flex w-[500px] lg:w-[700px] xl:w-[1000px] h-[400px] lg:h-[550px] xl:h-[650px] mt-20 lg:mt-10 xl:ml-20"
    >
    </ag-charts>
  `,
  styles: ``,
})
export class BarComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
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
          direction: 'horizontal',
          xKey: 'month',
          yKey: 'sales',
          fill: '#0F49A0',
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'left',
          title: {
            text: 'Month of the year',
            fontWeight: 'bold',
            fontSize: 12,
          },
        },
        {
          type: 'number',
          position: 'bottom',
          title: {
            text: 'Total Sales',
            fontWeight: 'bold',
            fontSize: 12,
          },
          interval: { step: 200 },
        },
      ],
    };
  }
}
