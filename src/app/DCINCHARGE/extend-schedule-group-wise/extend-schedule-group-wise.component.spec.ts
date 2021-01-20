import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendScheduleGroupWiseComponent } from './extend-schedule-group-wise.component';

describe('ExtendScheduleGroupWiseComponent', () => {
  let component: ExtendScheduleGroupWiseComponent;
  let fixture: ComponentFixture<ExtendScheduleGroupWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendScheduleGroupWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendScheduleGroupWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
