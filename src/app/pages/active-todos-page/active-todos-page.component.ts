import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-active-todos-page',
  templateUrl: './active-todos-page.component.html',
  styleUrls: ['./active-todos-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveTodosPageComponent {
  constructor() {}
}
