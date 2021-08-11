import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  @Output() onChangeIsCompleted: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  public handleIsCompletedChange(): void {
    let updatedTask: Task = this.taskService.invertIsCompleted(this.task);
    this.onChangeIsCompleted.emit(updatedTask);
  }
}
