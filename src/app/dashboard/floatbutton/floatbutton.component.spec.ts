import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatbuttonComponent } from './floatbutton.component';

describe('FloatbuttonComponent', () => {
  let component: FloatbuttonComponent;
  let fixture: ComponentFixture<FloatbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
