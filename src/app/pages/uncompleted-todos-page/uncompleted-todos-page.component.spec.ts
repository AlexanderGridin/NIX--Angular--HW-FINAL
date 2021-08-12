import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncompletedTodosPageComponent } from './uncompleted-todos-page.component';

describe('UncompletedTodosPageComponent', () => {
  let component: UncompletedTodosPageComponent;
  let fixture: ComponentFixture<UncompletedTodosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncompletedTodosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncompletedTodosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
