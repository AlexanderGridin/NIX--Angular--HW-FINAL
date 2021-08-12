import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';

import { TodosService } from 'src/app/services/todos/todos.service';
import { TodosStateService } from 'src/app/services/todos-state/todos-state.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private todosService: TodosService,
    private todosStateService: TodosStateService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      tasks: new FormArray([]),
    });

    this.pushTaskControlsIntoForm();
  }

  public pushTaskControlsIntoForm(): void {
    this.tasksControls.push(this.createTaskControls());
  }

  get tasksControls(): FormArray {
    return this.form.get('tasks') as FormArray;
  }

  public createTaskControls(): AbstractControl {
    const taskFormGroup = new FormGroup({
      isCompleted: new FormControl(false),
      title: new FormControl('', [Validators.required]),
    });

    return taskFormGroup;
  }

  public removeTaskControlsFromForm(subtaskIndex: number): void {
    this.tasksControls.removeAt(subtaskIndex);
  }

  public handleSubmit(): void {
    if (this.form.status === 'INVALID') {
      this.form.markAsUntouched();
      return;
    }

    const formData = this.form.value;
    const todo = this.todosService.createTodoFromFormData(formData);

    this.todosStateService.saveTodo(todo);
    this.resetForm();
  }

  public resetForm(): void {
    this.form.reset();
    this.tasksControls.clear();
    this.pushTaskControlsIntoForm();
    this.form.markAsTouched();
  }
}
