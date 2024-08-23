import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-stacked-bar',
  standalone: true,
  imports: [AgCharts],
  template: `
    <ag-charts
      [options]="options"
      class="flex w-[500px] lg:w-[700px] xl:w-[1000px] h-[400px] lg:h-[550px] xl:h-[650px] mt-20 lg:mt-10 xl:ml-20"
    >
    </ag-charts>
  `,
  styles: ``
})
export class StackedColumnComponent {
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
        {
          quarter: "Q1'19",
          iphone: 124,
          mac: 18,
          ipad: 16,
          wearables: 18,
          services: 26,
        },
        {
          quarter: "Q2'19",
          iphone: 108,
          mac: 20,
          ipad: 16,
          wearables: 18,
          services: 40,
        },
        {
          quarter: "Q3'19",
          iphone: 96,
          mac: 22,
          ipad: 18,
          wearables: 24,
          services: 42,
        },
        {
          quarter: "Q4'19",
          iphone: 104,
          mac: 22,
          ipad: 14,
          wearables: 20,
          services: 40,
        },
      ],
      series: [
        {
          type: "bar",
          xKey: "quarter",
          yKey: "iphone",
          yName: "iPhone",
          stacked: true,
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "mac",
          yName: "Mac",
          stacked: true,
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "ipad",
          yName: "iPad",
          stacked: true,
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "wearables",
          yName: "Wearables",
          stacked: true,
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "services",
          yName: "Services",
          stacked: true,
        },
      ],
    };
  }
}
