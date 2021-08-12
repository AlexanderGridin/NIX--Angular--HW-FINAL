import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  @Input() todos!: Todo[];

  constructor() {}
}
