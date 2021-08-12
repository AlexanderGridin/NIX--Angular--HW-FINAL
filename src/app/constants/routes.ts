import { Routes } from '@angular/router';
import { CompletedTodosPageComponent } from '../pages/completed-todos-page/completed-todos-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { UncompletedTodosPageComponent } from '../pages/uncompleted-todos-page/uncompleted-todos-page.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'uncompleted-todos',
    component: UncompletedTodosPageComponent,
  },
  {
    path: 'completed-todos',
    component: CompletedTodosPageComponent,
  },
];
