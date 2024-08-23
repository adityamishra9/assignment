import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-line',
  standalone: true,
  imports: [AgCharts],
  template: `<ag-charts
    [options]="options"
    class="flex w-[500px] lg:w-[700px] xl:w-[1000px] h-[400px] lg:h-[550px] xl:h-[650px] mt-20 lg:mt-10 xl:ml-20"
  >
  </ag-charts> `,
})
export class LineComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      title: {
        text: 'Annual Fuel Expenditure',
      },
      data: [
        {
          quarter: 'Q1',
          petrol: 200,
          diesel: 100,
        },
        {
          quarter: 'Q2',
          petrol: 300,
          diesel: 130,
        },
        {
          quarter: 'Q3',
          petrol: 350,
          diesel: 160,
        },
        {
          quarter: 'Q4',
          petrol: 400,
          diesel: 200,
        },
      ],
      series: [
        {
          type: 'line',
          xKey: 'quarter',
          yKey: 'petrol',
          yName: 'Petrol',
        },
        {
          type: 'line',
          xKey: 'quarter',
          yKey: 'diesel',
          yName: 'Diesel',
        },
      ],
    };
  }
}
