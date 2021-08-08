import { Injectable } from '@angular/core';

import { Todo } from 'src/app/interfaces/todo';
import { TodoSubTask } from 'src/app/interfaces/todo-sub-task';

@Injectable()
export class TodoService {

  constructor() { }

  public createTodo(todo: Todo): Todo{
    return  todo;
  }
}
