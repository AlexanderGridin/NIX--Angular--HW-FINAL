import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent implements OnInit {
  public form!: FormGroup;
  public isFormVisible: boolean = true;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      tasks: new FormArray([]),
    });

    this.pushTaskControlsToForm();
  }

  public pushTaskControlsToForm(): void {
    this.tasksControls.push(this.createTaskControls());
  }

  get tasksControls(): FormArray {
    return this.form.get('tasks') as FormArray;
  }

  public createTaskControls(): AbstractControl {
    const taskFormGroup = new FormGroup({
      completed: new FormControl(false),
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
    const todo = this.todoService.createTodoFromFormData(formData);

    this.todoService.saveTodoInStore(todo);
    this.resetForm();
  }

  public resetForm(): void {
    this.initForm();
    this.form.markAsTouched();
  }
}
