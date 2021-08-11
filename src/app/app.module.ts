import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoService } from './services/todo/todo.service';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { StoreModule } from '@ngrx/store';
import { TodosListComponent } from './components/todos-list/todos-list.component';

import { todoReducer } from './store/todo/todo.reducer';
import { TaskComponent } from './components/task/task.component';
import { UncompletedTodosListComponent } from './components/uncompleted-todos-list/uncompleted-todos-list.component';
import { CompletedTodosListComponent } from './components/completed-todos-list/completed-todos-list.component';
import { TodoStateService } from './services/todo-state/todo-state.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoFormComponent,
    TodosListComponent,
    TaskComponent,
    UncompletedTodosListComponent,
    CompletedTodosListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todo: todoReducer }),
  ],
  providers: [TodoService, TodoStateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
