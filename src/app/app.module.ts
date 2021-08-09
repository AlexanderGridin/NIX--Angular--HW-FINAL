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

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoFormComponent,
    TodosListComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todo: todoReducer }),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
