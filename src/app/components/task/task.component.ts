import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  @Output() onChangeIsCompleted: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  public handleIsCompletedChange(): void {
    let updatedTask: Task = this.tasksService.invertIsCompleted(this.task);
    this.onChangeIsCompleted.emit(updatedTask);
  }
}
