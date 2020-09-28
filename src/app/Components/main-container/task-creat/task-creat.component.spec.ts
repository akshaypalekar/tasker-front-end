import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCreatComponent } from './task-creat.component';

describe('TaskCreatComponent', () => {
  let component: TaskCreatComponent;
  let fixture: ComponentFixture<TaskCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
