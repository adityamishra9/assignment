import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  collapsed = true;

  collapse() {
    this.collapsed = !this.collapsed;
  }

  @Input() title: string | undefined;
  @Input() values: Array<string> | undefined;
}
