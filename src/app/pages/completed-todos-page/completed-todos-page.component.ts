import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-completed-todos-page',
  templateUrl: './completed-todos-page.component.html',
  styleUrls: ['./completed-todos-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedTodosPageComponent {
  constructor() {}
}
