import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  public todos!: Todo[] | undefined;

  constructor(private todoServie: TodoService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  public getAllTodos(): void {
    this.todoServie.getAllTodos().subscribe({
      next: (todos) => (this.todos = todos),
    });
  }
}
