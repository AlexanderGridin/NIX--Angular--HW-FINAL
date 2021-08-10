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
  on(TodoActions.addTodo, (state, { todo }) => {
    let todos: Todo[] = [...state.todos];

    todos.push(todo as Todo);

    return {
      ...state,
      todos,
    };
  }),

  on(TodoActions.updateTodo, (state, { todo }) => {
    let todos: Todo[] = [...state.todos];
    todos = [...todos];

    todos = todos.map((todoFromStore) => {
      if (todoFromStore.id === todo.id) {
        return todo;
      }

      return todoFromStore;
    });

    return {
      ...state,
      todos,
    };
  })
);

export function todoReducer(state: State | undefined, action: Action) {
  return _todoReducer(state, action);
}
