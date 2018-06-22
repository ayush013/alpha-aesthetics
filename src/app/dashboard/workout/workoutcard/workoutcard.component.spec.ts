import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutcardComponent } from './workoutcard.component';

describe('WorkoutcardComponent', () => {
  let component: WorkoutcardComponent;
  let fixture: ComponentFixture<WorkoutcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
