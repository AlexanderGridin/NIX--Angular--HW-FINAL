import { Injectable } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Injectable()
export class TaskService {
  constructor() {}

  public createTaskFromFormData(
    formData: Task,
    idGenerationSeed: number = 0
  ): Task {
    let createdTask: Task = {
      ...formData,
      id: new Date().getTime() + ++idGenerationSeed,
    };

    return createdTask;
  }

  public updateTask(task: Task): Task {
    let updatedTask: Task = {
      ...task,
    };

    return updatedTask;
  }

  public invertIsCompleted(task: Task): Task {
    let { completed } = task;

    let updatedTask: Task = {
      ...task,
      completed: !completed,
    };

    return updatedTask;
  }
}
