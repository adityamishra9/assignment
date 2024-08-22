import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { CardComponent } from './card/card.component';
import { CoupensComponent } from './coupens/coupens.component';
import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';
import { ProductsComponent } from './products/products.component';
import { RecordsComponent } from './records/records.component';
import { StatisticsComponent } from './statistics/statistics.component';

export const routes: Routes = [
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'charts',
    component: ChartsComponent,
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
    path: 'ideas',
    component: IdeasComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'records',
    component: RecordsComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
];
