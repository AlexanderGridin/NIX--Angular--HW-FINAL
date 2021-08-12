import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  public isVisibleAddTodoForm: boolean = false;

  constructor() {}

  public toggleAddTodoFormVisibility(): void {
    this.isVisibleAddTodoForm = !this.isVisibleAddTodoForm;
  }
}
