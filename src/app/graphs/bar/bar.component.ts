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
        {
          quarter: "Q1'18",
          iphone: 140,
          mac: 16,
          ipad: 14,
          wearables: 12,
          services: 20,
        },
        {
          quarter: "Q2'18",
          iphone: 124,
          mac: 20,
          ipad: 14,
          wearables: 12,
          services: 30,
        },
        {
          quarter: "Q3'18",
          iphone: 112,
          mac: 20,
          ipad: 18,
          wearables: 14,
          services: 36,
        },
        {
          quarter: "Q4'18",
          iphone: 118,
          mac: 24,
          ipad: 14,
          wearables: 14,
          services: 36,
        },
      ],
      series: [
        
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'quarter',
          yKey: 'mac',
          yName: 'Mac',
        },
      ],
    };
  }
}
