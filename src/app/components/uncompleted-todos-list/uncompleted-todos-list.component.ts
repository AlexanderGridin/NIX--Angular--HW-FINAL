import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-uncompleted-todos-list',
  templateUrl: './uncompleted-todos-list.component.html',
  styleUrls: ['./uncompleted-todos-list.component.css'],
})
export class UncompletedTodosListComponent implements OnInit {
  public todos!: Todo[];

  constructor(private todoServie: TodoService) {}

  ngOnInit(): void {
    this.getUncompletedTodos();
  }

  public getUncompletedTodos(): void {
    this.todoServie.getUncomplitedTodosFromState().subscribe({
      next: (todos) => (this.todos = todos),
    });
  }
}
