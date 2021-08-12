import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-uncompleted-todos-page',
  templateUrl: './uncompleted-todos-page.component.html',
  styleUrls: ['./uncompleted-todos-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UncompletedTodosPageComponent {
  constructor() {}
}
