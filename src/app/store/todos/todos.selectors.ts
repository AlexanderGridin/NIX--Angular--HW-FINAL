import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from 'src/app/interfaces/state';
import { Todo } from 'src/app/interfaces/todo';

export namespace TodosSelectors {
  export const state = createFeatureSelector<State>('todos');

  export const getAllTodos = createSelector(
    state,
    (state: State): Todo[] => state.todos
  );

  export const getUncomplitedTodos = createSelector(
    state,
    (state: State): Todo[] =>
      state.todos.filter((todo: Todo) => !todo.isCompleted)
  );

  export const getComplitedTodos = createSelector(
    state,
    (state: State): Todo[] =>
      state.todos.filter((todo: Todo) => todo.isCompleted)
  );
}
