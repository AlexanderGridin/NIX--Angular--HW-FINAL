import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from 'src/app/interfaces/state';
import { Todo } from 'src/app/interfaces/todo';

export namespace TodoSelectors {
  export const state = createFeatureSelector<State>('todo');

  export const getAllTodos = createSelector(
    state,
    (state: State): Todo[] => state.todos
  );

  export const getUncomplitedTodos = createSelector(
    state,
    (state: State): Todo[] =>
      state.todos.filter((todo: Todo) => !todo.completed)
  );

  export const getComplitedTodos = createSelector(
    state,
    (state: State): Todo[] => state.todos.filter((todo: Todo) => todo.completed)
  );
}
