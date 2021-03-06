import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { Todo } from 'src/app/interfaces/todo';

import { TodosStateService } from 'src/app/services/todos-state/todos-state.service';

@Component({
  selector: 'app-completed-todos-list',
  templateUrl: './completed-todos-list.component.html',
  styleUrls: ['./completed-todos-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedTodosListComponent implements OnInit {
  public completedTodos!: Todo[];

  constructor(
    private todosStateService: TodosStateService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCompoletedTodos();
  }

  public getCompoletedTodos(): void {
    this.todosStateService.getCompletedTodos().subscribe({
      next: (todos: Todo[]): void => {
        this.completedTodos = todos;
        this.changeDetectorRef.detectChanges();
      },
    });
  }
}
