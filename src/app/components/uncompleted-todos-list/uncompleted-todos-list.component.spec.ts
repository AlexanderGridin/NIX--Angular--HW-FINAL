import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncompletedTodosListComponent } from './uncompleted-todos-list.component';

describe('UncompletedTodosListComponent', () => {
  let component: UncompletedTodosListComponent;
  let fixture: ComponentFixture<UncompletedTodosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncompletedTodosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncompletedTodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
