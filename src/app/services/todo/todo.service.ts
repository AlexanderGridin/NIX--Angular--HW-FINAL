import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { TodoActions } from 'src/app/store/todo/todo.actions';

import { Todo } from 'src/app/interfaces/todo';
import { Task } from 'src/app/interfaces/task';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TodoSelectors } from 'src/app/store/todo/todo.selectors';

@Injectable()
export class TodoService {
  constructor(private store$: Store) {}

  public createTodoFromFormData(formData: Todo): Todo {
    let createdTodo: Todo = {
      ...formData,
      completed: false,
    };
    return createdTodo;
  }

  public saveTodoInStore(todo: Todo): void {
    this.store$.dispatch(TodoActions.addTodo({ todo }));
  }

  public updateTodoInStore(todo: Todo, index: number): void {
    this.store$.dispatch(TodoActions.updateTodo({ todo, index }));
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.store$.select(TodoSelectors.getAllTodos);
  }

  public getCompletedTodosFromStore(): Observable<Todo[]> {
    return this.store$.select(TodoSelectors.getComplitedTodos);
  }

  public getUncomplitedTodosFromStore(): Observable<Todo[]> {
    return this.store$.select(TodoSelectors.getUncomplitedTodos);
  }

  public updateTodoTaskStatus(todo: Todo, task: Task, taskIndex: number): Todo {
    let { tasks } = todo;
    tasks = [...tasks];
    tasks[taskIndex] = task;

    let updatedTodo: Todo = {
      ...todo,
      tasks,
    };

    return updatedTodo;
  }

  public checkIsTodoCompleted(todo: Todo): Todo {
    let result = todo.tasks.reduce((prev, task) => prev + +task.completed, 0);
    let updatedTodo: Todo;

    if (result < todo.tasks.length) {
      updatedTodo = {
        ...todo,
        completed: false,
      };
      return updatedTodo;
    }

    updatedTodo = {
      ...todo,
      completed: true,
    };

    return updatedTodo;
  }
}
