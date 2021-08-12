import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  public isVisibleAddTodoForm: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleAddTodoFormVisibility(): void {
    this.isVisibleAddTodoForm = !this.isVisibleAddTodoForm;
  }
}
