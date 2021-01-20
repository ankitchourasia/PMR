import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleACompleteGroupGIComponent } from './schedule-a-complete-group-gi.component';

describe('ScheduleACompleteGroupGIComponent', () => {
  let component: ScheduleACompleteGroupGIComponent;
  let fixture: ComponentFixture<ScheduleACompleteGroupGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleACompleteGroupGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleACompleteGroupGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
