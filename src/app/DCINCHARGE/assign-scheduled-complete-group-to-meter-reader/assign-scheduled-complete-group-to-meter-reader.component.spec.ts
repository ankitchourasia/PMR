import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignScheduledCompleteGroupToMeterReaderComponent } from './assign-scheduled-complete-group-to-meter-reader.component';

describe('AssignScheduledCompleteGroupToMeterReaderComponent', () => {
  let component: AssignScheduledCompleteGroupToMeterReaderComponent;
  let fixture: ComponentFixture<AssignScheduledCompleteGroupToMeterReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignScheduledCompleteGroupToMeterReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignScheduledCompleteGroupToMeterReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
