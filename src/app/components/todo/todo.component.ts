import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() index!: number;

  constructor() {}

  ngOnInit(): void {}
}
