import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieCalcComponent } from './calorie-calc.component';

describe('CalorieCalcComponent', () => {
  let component: CalorieCalcComponent;
  let fixture: ComponentFixture<CalorieCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalorieCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
