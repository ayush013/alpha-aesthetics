import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriearticleComponent } from './caloriearticle.component';

describe('CaloriearticleComponent', () => {
  let component: CaloriearticleComponent;
  let fixture: ComponentFixture<CaloriearticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriearticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
