import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodosStateService } from 'src/app/services/todos-state/todos-state.service';

@Component({
  selector: 'app-all-todos-page',
  templateUrl: './all-todos-page.component.html',
  styleUrls: ['./all-todos-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTodosPageComponent implements OnInit {
  public todos!: Todo[];

  constructor(
    private todosStateService: TodosStateService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  public getAllTodos(): void {
    this.todosStateService.getAllTodos().subscribe({
      next: (todos: Todo[]): void => {
        this.todos = todos;
        this.cdr.detectChanges();
      },
    });
  }
}
