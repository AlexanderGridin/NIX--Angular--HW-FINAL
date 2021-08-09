import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoSelectors } from 'src/app/store/todo/todo.selectors';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  public todos!: Todo[] | undefined;

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.select(TodoSelectors.getTodos).subscribe({
      next: (todos) => (this.todos = todos),
    });
    console.log(this.todos);
  }
}
