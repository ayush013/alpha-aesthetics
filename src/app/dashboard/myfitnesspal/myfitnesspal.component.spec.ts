import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfitnesspalComponent } from './myfitnesspal.component';

describe('MyfitnesspalComponent', () => {
  let component: MyfitnesspalComponent;
  let fixture: ComponentFixture<MyfitnesspalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfitnesspalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfitnesspalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
