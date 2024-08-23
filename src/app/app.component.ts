import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { RsidenavComponent } from './rsidenav/rsidenav.component';
import { ChartsComponent } from "./charts/charts.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { CardComponent } from "./card/card.component";

export class AppModule {}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, HeaderComponent, RsidenavComponent, ChartsComponent, StatisticsComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'assignment';
}
