import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodosStateService } from 'src/app/services/todos-state/todos-state.service';

@Component({
  selector: 'app-all-todos-page',
  templateUrl: './all-todos-page.component.html',
  styleUrls: ['./all-todos-page.component.css'],
})
export class AllTodosPageComponent implements OnInit {
  public todos!: Todo[];

  constructor(private todosStateService: TodosStateService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  public getAllTodos(): void {
    this.todosStateService.getAllTodos().subscribe({
      next: (todos: Todo[]): void => {
        this.todos = todos;
      },
    });
  }
}
