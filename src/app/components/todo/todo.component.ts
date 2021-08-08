import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // console.log(this.todoService.createTodo({title: 'test-todo'}))
  }

}
