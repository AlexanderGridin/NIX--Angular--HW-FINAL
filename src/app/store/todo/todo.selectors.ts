import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from 'src/app/interfaces/state';

export namespace TodoSelectors {
  export const state = createFeatureSelector<State>('todo');

  export const getTodos = createSelector(state, (state) => state.todos);
}
