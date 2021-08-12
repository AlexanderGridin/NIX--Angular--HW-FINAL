import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodosStateService } from 'src/app/services/todos-state/todos-state.service';

@Component({
  selector: 'app-completed-todos-list',
  templateUrl: './completed-todos-list.component.html',
  styleUrls: ['./completed-todos-list.component.css'],
})
export class CompletedTodosListComponent implements OnInit {
  public completedTodos!: Todo[];

  constructor(private todosStateServices: TodosStateService) {}

  ngOnInit(): void {
    this.getCompoletedTodos();
  }

  public getCompoletedTodos(): void {
    this.todosStateServices.getCompletedTodos().subscribe({
      next: (todos) => (this.completedTodos = todos),
    });
  }
}
