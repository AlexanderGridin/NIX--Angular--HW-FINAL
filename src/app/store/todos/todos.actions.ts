import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/interfaces/todo';

export namespace TodosActions {
  export const addTodo = createAction('ADD_TODO', props<{ todo: Todo }>());

  export const updateTodo = createAction(
    'UPDATE_TODO',
    props<{ todo: Todo }>()
  );

  export const removeTodo = createAction(
    'REMOVE_TODO',
    props<{ todo: Todo }>()
  );
}
