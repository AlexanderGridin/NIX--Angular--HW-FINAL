import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoStateService } from 'src/app/services/todo-state/todo-state.service';

@Component({
  selector: 'app-all-todos-page',
  templateUrl: './all-todos-page.component.html',
  styleUrls: ['./all-todos-page.component.css'],
})
export class AllTodosPageComponent implements OnInit {
  public todos!: Todo[];

  constructor(private todoStateService: TodoStateService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  public getAllTodos(): void {
    this.todoStateService.getAllTodos().subscribe({
      next: (todos: Todo[]): void => {
        this.todos = todos;
      },
    });
  }
}
