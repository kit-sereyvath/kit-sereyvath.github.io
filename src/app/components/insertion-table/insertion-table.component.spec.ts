import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionTableComponent } from './insertion-table.component';

describe('InsertionTableComponent', () => {
  let component: InsertionTableComponent;
  let fixture: ComponentFixture<InsertionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
