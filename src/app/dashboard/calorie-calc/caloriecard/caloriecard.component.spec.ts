import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriecardComponent } from './caloriecard.component';

describe('CaloriecardComponent', () => {
  let component: CaloriecardComponent;
  let fixture: ComponentFixture<CaloriecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
