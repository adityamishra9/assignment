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
  styles: ``,
})
export class StackedColumnComponent {
  public options: AgChartOptions;
  constructor() {
    this.options = {
      data: [
        {
          month: 'Jan',
          sales: 500,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 400,
        },
        {
          month: 'Feb',
          sales: 550,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 500,
        },
        {
          month: 'Mar',
          sales: 980,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 800,
        },
        {
          month: 'Apr',
          sales: 470,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 900,
        },
        {
          month: 'Ma',
          sales: 580,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 600,
        },
        {
          month: 'June',
          sales: 430,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 200,
        },
        {
          month: 'Jul',
          sales: 600,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 100,
        },
        {
          month: 'Aug',
          sales: 580,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 520,
        },
        {
          month: 'Sep',
          sales: 620,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 680,
        },
        {
          month: 'Oct',
          sales: 400,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 350,
        },
        {
          month: 'Nov',
          sales: 590,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 470,
        },
        {
          month: 'Dec',
          sales: 888,
          zip_code: 100,
          city: 'Chennai',
          country: 'India',
          quantity: 750,
        },
      ],
      series: [
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'sales',
          fill: '#0F49A0',
          stacked: true,
        },
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'quantity',
          stacked: true,
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          title: {
            text: 'Month of the year',
            fontWeight: 'bold',
            fontSize: 12,
          },
        },
        {
          type: 'number',
          position: 'left',
          title: {
            text: 'Total Sales and Quantity',
            fontWeight: 'bold',
            fontSize: 12,
          },
          interval: { step: 200 },
        },
      ],
    };
  }
}
