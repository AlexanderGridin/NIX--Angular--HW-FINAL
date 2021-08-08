import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoService } from './services/todo/todo.service';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
