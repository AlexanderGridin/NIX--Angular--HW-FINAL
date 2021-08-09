import { Injectable } from '@angular/core';

import { Todo } from 'src/app/interfaces/todo';
import { Task } from 'src/app/interfaces/task';

@Injectable()
export class TodoService {
  constructor() {}

  public createTodo(todo: Todo): Todo {
    return todo;
  }
}
