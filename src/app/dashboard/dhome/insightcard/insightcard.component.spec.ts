import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightcardComponent } from './insightcard.component';

describe('InsightcardComponent', () => {
  let component: InsightcardComponent;
  let fixture: ComponentFixture<InsightcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
