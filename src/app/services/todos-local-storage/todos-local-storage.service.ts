import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { TodosSelectors } from 'src/app/store/todos/todos.selectors';

import { Todo } from 'src/app/interfaces/todo';

@Injectable()
export class TodosLocalStorageService {
  private TODOS_KEY = 'Todos';

  constructor(private store$: Store) {}

  public isTodosInLocalStorage(): boolean {
    return !!localStorage.getItem(this.TODOS_KEY);
  }

  public updateTodosInLocalStorage(): void {
    let allTodosFromState: Observable<Todo[]> = this.store$.select(
      TodosSelectors.getAllTodos
    );

    allTodosFromState.subscribe({
      next: (todos: Todo[]): void => {
        localStorage.setItem(this.TODOS_KEY, JSON.stringify(todos));
      },
    });
  }

  public loadTodosFromLocalStorage(): Todo[] {
    let dataFromLocalStorage: string | null = localStorage.getItem(
      this.TODOS_KEY
    );

    return JSON.parse(dataFromLocalStorage as string) as Todo[];
  }
}
