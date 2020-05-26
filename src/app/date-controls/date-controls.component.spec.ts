import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateControlsComponent } from './date-controls.component';

describe('DateControlsComponent', () => {
  let component: DateControlsComponent;
  let fixture: ComponentFixture<DateControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
