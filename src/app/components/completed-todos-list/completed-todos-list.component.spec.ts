import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTodosListComponent } from './completed-todos-list.component';

describe('CompletedTodosListComponent', () => {
  let component: CompletedTodosListComponent;
  let fixture: ComponentFixture<CompletedTodosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedTodosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
