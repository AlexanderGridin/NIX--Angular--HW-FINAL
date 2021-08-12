import { Component, OnInit } from '@angular/core';

import { Todo } from '../../interfaces/todo';

import { TodosStateService } from 'src/app/services/todos-state/todos-state.service';

@Component({
  selector: 'app-uncompleted-todos-list',
  templateUrl: './uncompleted-todos-list.component.html',
  styleUrls: ['./uncompleted-todos-list.component.css'],
})
export class UncompletedTodosListComponent implements OnInit {
  public todos!: Todo[];

  constructor(private todosStateService: TodosStateService) {}

  ngOnInit(): void {
    this.getUncompletedTodos();
  }

  public getUncompletedTodos(): void {
    this.todosStateService.getUncomplitedTodos().subscribe({
      next: (todos: Todo[]): void => {
        this.todos = todos;
      },
    });
  }
}
