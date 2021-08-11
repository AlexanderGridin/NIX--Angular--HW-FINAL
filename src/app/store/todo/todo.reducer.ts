import { Action, createReducer, on } from '@ngrx/store';
import { TodoActions } from './todo.actions';
import { State } from 'src/app/interfaces/state';
import { Todo } from 'src/app/interfaces/todo';

// TODO: это нужно для теста. Перед сдачей ДЗ убрать!
const INITIAL_TD: Todo = {
  title: 'Initial todo',
  description: 'Initial todo description',
  tasks: [
    {
      title: 'Initial task',
      completed: false,
      id: 1628560439037,
    },
  ],
  completed: false,
  id: 1628560439036,
};

const initialState: State = {
  todos: [INITIAL_TD],
};

const _todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state: State, { todo }: { todo: Todo }): State => {
    let stateTodos: Todo[] = [...state.todos];
    let updatedTodos = [...stateTodos, todo];

    return {
      ...state,
      todos: updatedTodos,
    };
  }),

  on(
    TodoActions.updateTodo,
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
    TodoActions.removeTodo,
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

export function todoReducer(state: State | undefined, action: Action) {
  return _todoReducer(state, action);
}
