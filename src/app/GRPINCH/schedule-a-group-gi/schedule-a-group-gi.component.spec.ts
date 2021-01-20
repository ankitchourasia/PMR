import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAGroupGIComponent } from './schedule-a-group-gi.component';

describe('ScheduleAGroupGIComponent', () => {
  let component: ScheduleAGroupGIComponent;
  let fixture: ComponentFixture<ScheduleAGroupGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleAGroupGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAGroupGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
