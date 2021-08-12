import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTodosPageComponent } from './completed-todos-page.component';

describe('CompletedTodosPageComponent', () => {
  let component: CompletedTodosPageComponent;
  let fixture: ComponentFixture<CompletedTodosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedTodosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTodosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
