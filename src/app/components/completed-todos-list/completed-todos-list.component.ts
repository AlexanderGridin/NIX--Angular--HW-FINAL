import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-completed-todos-list',
  templateUrl: './completed-todos-list.component.html',
  styleUrls: ['./completed-todos-list.component.css'],
})
export class CompletedTodosListComponent implements OnInit {
  public todos!: Todo[];

  constructor(private todoServie: TodoService) {}

  ngOnInit(): void {
    this.getCompoletedTodos();
  }

  public getCompoletedTodos(): void {
    this.todoServie.getCompletedTodosFromStore().subscribe({
      next: (todos) => (this.todos = todos),
    });
  }
}
