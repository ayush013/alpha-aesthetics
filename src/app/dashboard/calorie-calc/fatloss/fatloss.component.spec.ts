import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatlossComponent } from './fatloss.component';

describe('FatlossComponent', () => {
  let component: FatlossComponent;
  let fixture: ComponentFixture<FatlossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatlossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
