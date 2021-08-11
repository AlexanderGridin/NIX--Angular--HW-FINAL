import { Injectable } from '@angular/core';

import { Todo } from 'src/app/interfaces/todo';
import { Task } from 'src/app/interfaces/task';

@Injectable()
export class TodoService {
  constructor() {}

  public createTodoFromFormData(formData: Todo): Todo {
    let tasks: Task[] = [...formData.tasks];

    let todo: Todo = {
      ...formData,
      tasks,
      completed: false,
      id: new Date().getTime(),
    };

    return todo;
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

  public checkIsCompletedTodo(todo: Todo): Todo {
    let result: number = todo.tasks.reduce(
      (prev, task) => prev + +task.completed,
      0
    );
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
