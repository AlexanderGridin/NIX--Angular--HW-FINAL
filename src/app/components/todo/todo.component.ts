import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { Task } from 'src/app/interfaces/task';
import { TodoService } from 'src/app/services/todo/todo.service';
import { TodoStateService } from 'src/app/services/todo-state/todo-state.service';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() index!: number;

  @Output() onRemove: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(
    private todoService: TodoService,
    private todoStateService: TodoStateService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {}

  public handleTaskCompletedChange(task: Task): void {
    let updatedTask: Task = this.taskService.updateTask(task);
    let updatedTodo: Todo = this.todoService.updateTaskInTodo(
      this.todo,
      updatedTask
    );

    updatedTodo = this.todoService.checkIsCompletedTodo(updatedTodo);
    this.todoStateService.updateTodo(updatedTodo);
  }

  public handleRemoving(): void {
    this.todoStateService.removeTodo(this.todo);
  }
}
