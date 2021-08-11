import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { TodoActions } from 'src/app/store/todo/todo.actions';
import { TodoSelectors } from 'src/app/store/todo/todo.selectors';

@Injectable()
export class TodoStateService {
  constructor(private store$: Store) {}

  public saveTodo(todo: Todo): void {
    this.store$.dispatch(TodoActions.addTodo({ todo }));
  }

  public updateTodo(todo: Todo): void {
    this.store$.dispatch(TodoActions.updateTodo({ todo }));
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.store$.select(TodoSelectors.getAllTodos);
  }

  public getCompletedTodos(): Observable<Todo[]> {
    return this.store$.select(TodoSelectors.getComplitedTodos);
  }

  public getUncomplitedTodos(): Observable<Todo[]> {
    return this.store$.select(TodoSelectors.getUncomplitedTodos);
  }
}
