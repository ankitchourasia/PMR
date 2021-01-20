import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignScheduledGroupToMeterReaderComponent } from './assign-scheduled-group-to-meter-reader.component';

describe('AssignScheduledGroupToMeterReaderComponent', () => {
  let component: AssignScheduledGroupToMeterReaderComponent;
  let fixture: ComponentFixture<AssignScheduledGroupToMeterReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignScheduledGroupToMeterReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignScheduledGroupToMeterReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
