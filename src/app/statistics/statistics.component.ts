import { Component } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
  MatExpansionPanelDescription,
} from '@angular/material/expansion';
import { reportOptions } from './stats';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
    ChartsComponent,
    RouterModule,
    CommonModule,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    FormsModule,
    CardComponent,
  ],
  templateUrl: './statistics.component.html',
})
export class StatisticsComponent {
  reportOpt = reportOptions;
  close = true;
  closeFilters() {
    this.close = !this.close;
  }
  setTitle: any;
  values1 = ['quantity', 'sales'];
  values2 = [
    'city',
    'country',
    'customer_id',
    'item_type',
    'item_id',
    'product',
    'region',
    'SKU',
    'state',
    'store',
    'zip_code',
    'dates',
  ];
}
