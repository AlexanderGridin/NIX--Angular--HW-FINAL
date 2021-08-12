import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTodosPageComponent } from './active-todos-page.component';

describe('ActiveTodosPageComponent', () => {
  let component: ActiveTodosPageComponent;
  let fixture: ComponentFixture<ActiveTodosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveTodosPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTodosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
