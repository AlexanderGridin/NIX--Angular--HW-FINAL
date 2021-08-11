import { Injectable } from '@angular/core';

import { Todo } from 'src/app/interfaces/todo';
import { Task } from 'src/app/interfaces/task';

import { TaskService } from '../task/task.service';
import { GenerateIdService } from '../generate-id/generate-id.service';

@Injectable()
export class TodoService {
  constructor(
    private taskService: TaskService,
    private generateIdService: GenerateIdService
  ) {}

  public createTodoFromFormData(formData: Todo): Todo {
    let tasks: Task[] = [...formData.tasks].map(
      (task: Task, i: number): Task =>
        this.taskService.createTaskFromFormData(task, i)
    );

    let todo: Todo = {
      ...formData,
      tasks,
      completed: false,
      id: this.generateIdService.generateId(),
    };

    return todo;
  }

  public updateTaskInTodo(todo: Todo, taskForUpdate: Task): Todo {
    let tasks: Task[] = [...todo.tasks];

    let updatedTasks: Task[] = tasks.map((task: Task) => {
      if (task.id === taskForUpdate.id) {
        return taskForUpdate;
      }

      return task;
    });

    let updatedTodo: Todo = {
      ...todo,
      tasks: updatedTasks,
    };

    return updatedTodo;
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
