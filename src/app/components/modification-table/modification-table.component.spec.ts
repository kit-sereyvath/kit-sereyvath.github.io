import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationTableComponent } from './modification-table.component';

describe('ModificationTableComponent', () => {
  let component: ModificationTableComponent;
  let fixture: ComponentFixture<ModificationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
