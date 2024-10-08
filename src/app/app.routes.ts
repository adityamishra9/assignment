import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CoupensComponent } from './coupens/coupens.component';
import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';
import { RecordsComponent } from './records/records.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProductsComponent } from './products/products.component';
import { MediaComponent } from './media/media.component';
import { DonutComponent } from './graphs/donut/donut.component';
import { LineComponent } from './graphs/line/line.component';
import { AreaComponent } from './graphs/area/area.component';
import { BarComponent } from './graphs/bar/bar.component';
import { StackedColumnComponent } from './graphs/stacked-column/stacked-column.component';
import { ColumnComponent } from './graphs/column/column.component';

export const routes: Routes = [
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'coupens',
    component: CoupensComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'ideas',
    component: IdeasComponent,
  },
  {
    path: 'records',
    component: RecordsComponent,
  },
  {
    path: 'media',
    component: MediaComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    children: [
      {
        path: 'column',
        component: ColumnComponent
      },
      {
        path: 'donut',
        component: DonutComponent
      },
      {
        path: 'line',
        component: LineComponent
      },
      {
        path: 'area',
        component: AreaComponent
      },
      {
        path: 'bar',
        component: BarComponent
      },
      {
        path: 'stacked-column',
        component: StackedColumnComponent
      },
    ]
  },
];
