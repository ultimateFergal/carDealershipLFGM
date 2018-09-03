import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComparisonComponent } from './cars-comparison.component';

describe('CarsComparisonComponent', () => {
  let component: CarsComparisonComponent;
  let fixture: ComponentFixture<CarsComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
