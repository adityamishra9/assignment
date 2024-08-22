import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { expandNavbarData, navbarData } from './nav-data';

@Component({
  selector: 'app-rsidenav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './rsidenav.component.html',
  styleUrl: './rsidenav.component.css',
})
export class RsidenavComponent {
  navData = navbarData;
  expandData=expandNavbarData;
  collapsed = false;

  collapse(){
    this.collapsed = !this.collapsed;
  }
}
