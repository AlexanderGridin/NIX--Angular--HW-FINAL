import { Component, OnInit } from '@angular/core';
import { Todo } from './interfaces/todo';
import { TodosLocalStorageService } from './services/todos-local-storage/todos-local-storage.service';
import { TodosStateService } from './services/todos-state/todos-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'NIX-HWRK-FINAL';

  constructor(
    private todosLocalStorageService: TodosLocalStorageService,
    private todosStateService: TodosStateService
  ) {}

  ngOnInit() {
    if (this.todosLocalStorageService.isTodosInLocalStorage()) {
      let todosFromLocalStorage: Todo[] =
        this.todosLocalStorageService.loadTodosFromLocalStorage();

      this.todosStateService.pushTodosInState(todosFromLocalStorage);
    }
  }
}
