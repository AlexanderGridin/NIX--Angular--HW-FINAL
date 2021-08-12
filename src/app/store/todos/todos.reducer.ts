import { Action, createReducer, on } from '@ngrx/store';

import { TodosActions } from './todos.actions';

import { State } from 'src/app/interfaces/state';
import { Todo } from 'src/app/interfaces/todo';

const initialState: State = {
  todos: [],
};

const _todosReducer = createReducer(
  initialState,
  on(TodosActions.addTodo, (state: State, { todo }: { todo: Todo }): State => {
    let stateTodos: Todo[] = [...state.todos];
    let updatedTodos = [...stateTodos, todo];

    return {
      ...state,
      todos: updatedTodos,
    };
  }),

  on(
    TodosActions.updateTodo,
    (state: State, { todo }: { todo: Todo }): State => {
      let stateTodos: Todo[] = [...state.todos];

      let updatedTodos = stateTodos.map((stateTodo: Todo) => {
        if (stateTodo.id === todo.id) {
          return todo;
        }

        return stateTodo;
      });

      return {
        ...state,
        todos: updatedTodos,
      };
    }
  ),

  on(
    TodosActions.removeTodo,
    (state: State, { todo }: { todo: Todo }): State => {
      let stateTodos = [...state.todos];
      let updatedTodos = stateTodos.filter(
        (todoFromState: Todo): boolean => todoFromState.id !== todo.id
      );

      return {
        ...state,
        todos: updatedTodos,
      };
    }
  )
);

export function todosReducer(state: State | undefined, action: Action) {
  return _todosReducer(state, action);
}
