import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleACompleteGroupComponent } from './schedule-a-complete-group.component';

describe('ScheduleACompleteGroupComponent', () => {
  let component: ScheduleACompleteGroupComponent;
  let fixture: ComponentFixture<ScheduleACompleteGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleACompleteGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleACompleteGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
