import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkingComponent } from './bulking.component';

describe('BulkingComponent', () => {
  let component: BulkingComponent;
  let fixture: ComponentFixture<BulkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
