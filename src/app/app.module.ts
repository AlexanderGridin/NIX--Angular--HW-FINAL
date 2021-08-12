import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoService } from './services/todo/todo.service';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { StoreModule } from '@ngrx/store';
import { TodosListComponent } from './components/todos-list/todos-list.component';

import { todoReducer } from './store/todo/todo.reducer';
import { TaskComponent } from './components/task/task.component';
import { UncompletedTodosListComponent } from './components/uncompleted-todos-list/uncompleted-todos-list.component';
import { CompletedTodosListComponent } from './components/completed-todos-list/completed-todos-list.component';
import { TodoStateService } from './services/todo-state/todo-state.service';
import { TaskService } from './services/task/task.service';
import { GenerateIdService } from './services/generate-id/generate-id.service';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';

import { ROUTES } from './constants/routes';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { CompletedTodosPageComponent } from './pages/completed-todos-page/completed-todos-page.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { UncompletedTodosPageComponent } from './pages/uncompleted-todos-page/uncompleted-todos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoCardComponent,
    AddTodoFormComponent,
    TodosListComponent,
    TaskComponent,
    UncompletedTodosListComponent,
    CompletedTodosListComponent,
    AddTodoComponent,
    TodoDashboardComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    HomePageComponent,
    MainNavigationComponent,
    CompletedTodosPageComponent,
    UncompletedTodosPageComponent,
    PageTitleComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todo: todoReducer }),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [TodoService, TodoStateService, TaskService, GenerateIdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
