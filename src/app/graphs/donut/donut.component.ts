import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [AgCharts],
  template: `<ag-charts
    [options]="options"
    class="flex w-[500px] lg:w-[700px] xl:w-[1000px] h-[400px] lg:h-[550px] xl:h-[650px] mt-20 lg:mt-10 xl:ml-20"
  >
  </ag-charts> `,
})
export class DonutComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      data: [
        { asset: 'Stocks', amount: 60000 },
        { asset: 'Bonds', amount: 40000 },
        { asset: 'Cash', amount: 7000 },
        { asset: 'Real Estate', amount: 5000 },
        { asset: 'Commodities', amount: 3000 },
      ],
      title: {
        text: 'Sales Composition',
      },
      series: [
        {
          type: 'donut',
          calloutLabelKey: 'asset',
          angleKey: 'amount',
          innerRadiusRatio: 0.7,
        },
      ],
    };
  }
}
