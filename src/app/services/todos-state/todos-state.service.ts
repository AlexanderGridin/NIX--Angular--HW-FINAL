import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { TodosActions } from 'src/app/store/todos/todos.actions';
import { TodosSelectors } from 'src/app/store/todos/todos.selectors';

import { TodosLocalStorageService } from '../todos-local-storage/todos-local-storage.service';

@Injectable()
export class TodosStateService {
  constructor(
    private store$: Store,
    private todosLocalStorageService: TodosLocalStorageService
  ) {}

  public saveTodo(todo: Todo): void {
    this.store$.dispatch(TodosActions.addTodo({ todo }));
    this.todosLocalStorageService.updateTodosInLocalStorage();
  }

  public updateTodo(todo: Todo): void {
    this.store$.dispatch(TodosActions.updateTodo({ todo }));
    this.todosLocalStorageService.updateTodosInLocalStorage();
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
    this.todosLocalStorageService.updateTodosInLocalStorage();
  }

  public pushTodosInState(todos: Todo[]): void {
    for (let todo of todos) {
      this.store$.dispatch(TodosActions.addTodo({ todo }));
    }
  }
}
