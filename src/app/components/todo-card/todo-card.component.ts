import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { Task } from 'src/app/interfaces/task';
import { TodosService } from 'src/app/services/todos/todos.service';
import { TodosStateService } from 'src/app/services/todos-state/todos-state.service';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  @Input() todo!: Todo;

  @Output() onRemove: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(
    private todosService: TodosService,
    private todosStateService: TodosStateService,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {}

  public handleTaskCompletedChange(task: Task): void {
    let updatedTask: Task = this.tasksService.updateTask(task);
    let updatedTodo: Todo = this.todosService.updateTaskInTodo(
      this.todo,
      updatedTask
    );

    updatedTodo = this.todosService.checkIsCompletedTodo(updatedTodo);
    this.todosStateService.updateTodo(updatedTodo);
  }

  public handleRemoving(): void {
    this.todosStateService.removeTodo(this.todo);
  }
}
