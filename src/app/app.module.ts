import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import { TodosService } from './services/todos/todos.service';
import { TodosStateService } from './services/todos-state/todos-state.service';
import { TasksService } from './services/tasks/tasks.service';
import { GenerateIdService } from './services/generate-id/generate-id.service';
import { TodosLocalStorageService } from './services/todos-local-storage/todos-local-storage.service';

import { AppComponent } from './app.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TaskComponent } from './components/task/task.component';
import { UncompletedTodosListComponent } from './components/uncompleted-todos-list/uncompleted-todos-list.component';
import { CompletedTodosListComponent } from './components/completed-todos-list/completed-todos-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodosDashboardComponent } from './components/todos-dashboard/todos-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { MessageComponent } from './components/message/message.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { CompletedTodosPageComponent } from './pages/completed-todos-page/completed-todos-page.component';
import { ActiveTodosPageComponent } from './pages/active-todos-page/active-todos-page.component';
import { AllTodosPageComponent } from './pages/all-todos-page/all-todos-page.component';

import { todosReducer } from './store/todos/todos.reducer';

import { ROUTES } from './constants/routes';

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
    TodosDashboardComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    MainNavigationComponent,
    PageTitleComponent,
    PageContentComponent,
    MessageComponent,

    HomePageComponent,
    CompletedTodosPageComponent,
    ActiveTodosPageComponent,
    AllTodosPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todos: todosReducer }),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    TodosService,
    TodosStateService,
    TasksService,
    GenerateIdService,
    TodosLocalStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
