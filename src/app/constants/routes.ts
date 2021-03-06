import { Routes } from '@angular/router';
import { AllTodosPageComponent } from '../pages/all-todos-page/all-todos-page.component';
import { CompletedTodosPageComponent } from '../pages/completed-todos-page/completed-todos-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ActiveTodosPageComponent } from '../pages/active-todos-page/active-todos-page.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'uncompleted-todos',
    component: ActiveTodosPageComponent,
  },
  {
    path: 'completed-todos',
    component: CompletedTodosPageComponent,
  },
  {
    path: 'all-todos',
    component: AllTodosPageComponent,
  },
];
