import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() index!: number;

  constructor() {}

  ngOnInit(): void {}

  public handleStatusChange(): void {
    this.invertTaskCompleted();
  }

  public invertTaskCompleted(): void {
    let { completed } = this.task;
    let task: Task = {
      ...this.task,
      completed: !completed,
    };

    this.task = task;
  }
}
