import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  collapsed = true;

  collapse() {
    this.collapsed = !this.collapsed;
  }

  @Input() title: string | undefined;
  @Input() values: Array<string> | undefined;

  store: FormGroup = new FormGroup({
    items: new FormControl(),
  });

  formValue: any;

  onRun() {
    this.formValue = this.store.value;
  }
}
