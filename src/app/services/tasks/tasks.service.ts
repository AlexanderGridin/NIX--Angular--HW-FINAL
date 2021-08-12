import { Injectable } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { GenerateIdService } from '../generate-id/generate-id.service';

@Injectable()
export class TasksService {
  constructor(private generateIdService: GenerateIdService) {}

  public createTaskFromFormData(formData: Task, taskIndex: number = 0): Task {
    let createdTask: Task = {
      ...formData,
      id: this.generateIdService.generateIdWithSeed(taskIndex),
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
    let { isCompleted } = task;

    let updatedTask: Task = {
      ...task,
      isCompleted: !isCompleted,
    };

    return updatedTask;
  }
}
