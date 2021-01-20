import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDateToExtendGroupScheduleComponent } from './select-date-to-extend-group-schedule.component';

describe('SelectDateToExtendGroupScheduleComponent', () => {
  let component: SelectDateToExtendGroupScheduleComponent;
  let fixture: ComponentFixture<SelectDateToExtendGroupScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDateToExtendGroupScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDateToExtendGroupScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
