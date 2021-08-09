import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/interfaces/todo';

export namespace TodoActions {
  export const addTodo = createAction('ADD_TODO', props<{ todo?: Todo }>());
}
