import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignScheduledRdToMeterReaderGiComponent } from './assign-scheduled-rd-to-meter-reader-gi.component';

describe('AssignScheduledRdToMeterReaderGiComponent', () => {
  let component: AssignScheduledRdToMeterReaderGiComponent;
  let fixture: ComponentFixture<AssignScheduledRdToMeterReaderGiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignScheduledRdToMeterReaderGiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignScheduledRdToMeterReaderGiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
