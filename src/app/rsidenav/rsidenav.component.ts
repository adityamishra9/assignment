import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { expandNavbarData, navbarData } from './nav-data';

@Component({
  selector: 'app-rsidenav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './rsidenav.component.html',
})
export class RsidenavComponent {
  
  navData = navbarData;
  expandData = expandNavbarData;
  collapsed = true;
  // click=false;

  collapse() {
    this.collapsed = !this.collapsed;
  }
  // isClicked() {
  //   this.click = !this.click;
  // }
}
