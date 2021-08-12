import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoStateService } from 'src/app/services/todo-state/todo-state.service';

@Component({
  selector: 'app-completed-todos-list',
  templateUrl: './completed-todos-list.component.html',
  styleUrls: ['./completed-todos-list.component.css'],
})
export class CompletedTodosListComponent implements OnInit {
  public completedTodos!: Todo[];

  constructor(private todoStateServices: TodoStateService) {}

  ngOnInit(): void {
    this.getCompoletedTodos();
  }

  public getCompoletedTodos(): void {
    this.todoStateServices.getCompletedTodos().subscribe({
      next: (todos) => (this.completedTodos = todos),
    });
  }
}
