import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { TodosActions } from 'src/app/store/todos/todos.actions';
import { TodosSelectors } from 'src/app/store/todos/todos.selectors';

@Injectable()
export class TodosStateService {
  constructor(private store$: Store) {}

  public saveTodo(todo: Todo): void {
    this.store$.dispatch(TodosActions.addTodo({ todo }));
  }

  public updateTodo(todo: Todo): void {
    this.store$.dispatch(TodosActions.updateTodo({ todo }));
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.store$.select(TodosSelectors.getAllTodos);
  }

  public getCompletedTodos(): Observable<Todo[]> {
    return this.store$.select(TodosSelectors.getComplitedTodos);
  }

  public getUncomplitedTodos(): Observable<Todo[]> {
    return this.store$.select(TodosSelectors.getUncomplitedTodos);
  }

  public removeTodo(todo: Todo): void {
    this.store$.dispatch(TodosActions.removeTodo({ todo }));
  }
}
