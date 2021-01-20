import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleASingleRdInGroupGIComponent } from './schedule-a-single-rd-in-group-gi.component';

describe('ScheduleASingleRdInGroupGIComponent', () => {
  let component: ScheduleASingleRdInGroupGIComponent;
  let fixture: ComponentFixture<ScheduleASingleRdInGroupGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleASingleRdInGroupGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleASingleRdInGroupGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
