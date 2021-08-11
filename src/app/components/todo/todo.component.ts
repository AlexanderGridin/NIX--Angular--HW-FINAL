import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { Task } from 'src/app/interfaces/task';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() index!: number;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  public handleTaskCompletedChange({
    task,
    index,
  }: {
    task: Task;
    index: number;
  }): void {
    this.todo = this.todoService.updateTodoTaskStatus(this.todo, task, index);
    this.todo = this.todoService.checkIsTodoCompleted(this.todo);
    this.todoService.updateTodoInState(this.todo);
  }
}
