import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent implements OnInit {
  public form!: FormGroup;
  public isFormVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
    console.log(this.form);
  }

  public initForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
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
    console.log(this.form.status);
    if (this.form.status === 'INVALID') {
      return;
    }

    const formData = this.form.value;
    console.log(formData);

    this.resetForm();
  }

  public resetForm(): void {
    this.isFormVisible = false;
    this.initForm();
    setTimeout(() => (this.isFormVisible = true));
  }
}

// this.form.reset();
// this.tasksControls.controls = [this.createTaskControls()];
