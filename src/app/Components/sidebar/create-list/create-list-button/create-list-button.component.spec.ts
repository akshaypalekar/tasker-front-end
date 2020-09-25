import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListButtonComponent } from './create-list-button.component';

describe('CreateListButtonComponent', () => {
  let component: CreateListButtonComponent;
  let fixture: ComponentFixture<CreateListButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateListButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
