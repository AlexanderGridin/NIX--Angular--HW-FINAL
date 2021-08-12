import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todos-dashboard',
  templateUrl: './todos-dashboard.component.html',
  styleUrls: ['./todos-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosDashboardComponent {
  constructor() {}
}
