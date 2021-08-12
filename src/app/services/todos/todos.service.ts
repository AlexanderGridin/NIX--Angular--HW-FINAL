import { Injectable } from '@angular/core';

import { Todo } from 'src/app/interfaces/todo';
import { Task } from 'src/app/interfaces/task';

import { TasksService } from '../tasks/tasks.service';
import { GenerateIdService } from '../generate-id/generate-id.service';

@Injectable()
export class TodosService {
  constructor(
    private tasksService: TasksService,
    private generateIdService: GenerateIdService
  ) {}

  public createTodoFromFormData(formData: Todo): Todo {
    let tasks: Task[] = [...formData.tasks].map(
      (task: Task, i: number): Task =>
        this.tasksService.createTaskFromFormData(task, i)
    );

    let todo: Todo = {
      ...formData,
      tasks,
      isCompleted: false,
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

  public checkIsCompletedTodo(todo: Todo): Todo {
    let totalTasks: number = todo.tasks.length;
    let totalCompletedTasks: number = todo.tasks.reduce(
      (accumulator, task) => accumulator + +task.isCompleted,
      0
    );
    let updatedTodo: Todo;

    if (totalCompletedTasks < totalTasks) {
      // Сперва может показаться, что можно было бы сделать просто return todo; Но в этом случае тудушка из колонки завершенных туду не будет перемещаться в колонку активных туду.
      updatedTodo = {
        ...todo,
        isCompleted: false,
      };

      return updatedTodo;
    }

    updatedTodo = {
      ...todo,
      isCompleted: true,
    };

    return updatedTodo;
  }
}
