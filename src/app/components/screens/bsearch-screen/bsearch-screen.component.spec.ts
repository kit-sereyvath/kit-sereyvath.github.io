import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsearchScreenComponent } from './bsearch-screen.component';

describe('BsearchScreenComponent', () => {
  let component: BsearchScreenComponent;
  let fixture: ComponentFixture<BsearchScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsearchScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsearchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
