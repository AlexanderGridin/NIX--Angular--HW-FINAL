import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTodosPageComponent } from './all-todos-page.component';

describe('AllTodosPageComponent', () => {
  let component: AllTodosPageComponent;
  let fixture: ComponentFixture<AllTodosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTodosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTodosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
