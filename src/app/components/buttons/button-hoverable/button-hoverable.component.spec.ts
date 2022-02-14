import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHoverableComponent } from './button-hoverable.component';

describe('ButtonHoverableComponent', () => {
  let component: ButtonHoverableComponent;
  let fixture: ComponentFixture<ButtonHoverableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonHoverableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHoverableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
