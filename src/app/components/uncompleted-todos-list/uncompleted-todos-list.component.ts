import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoStateService } from 'src/app/services/todo-state/todo-state.service';

@Component({
  selector: 'app-uncompleted-todos-list',
  templateUrl: './uncompleted-todos-list.component.html',
  styleUrls: ['./uncompleted-todos-list.component.css'],
})
export class UncompletedTodosListComponent implements OnInit {
  public todos!: Todo[];

  constructor(
    private todoServie: TodoService,
    private todoStateService: TodoStateService
  ) {}

  ngOnInit(): void {
    this.getUncompletedTodos();
  }

  public getUncompletedTodos(): void {
    this.todoStateService.getUncomplitedTodos().subscribe({
      next: (todos) => (this.todos = todos),
    });
  }
}
