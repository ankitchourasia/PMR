import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSheduledGroupToMeterReaderGIComponent } from './assign-sheduled-group-to-meter-reader-gi.component';

describe('AssignSheduledGroupToMeterReaderGIComponent', () => {
  let component: AssignSheduledGroupToMeterReaderGIComponent;
  let fixture: ComponentFixture<AssignSheduledGroupToMeterReaderGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignSheduledGroupToMeterReaderGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSheduledGroupToMeterReaderGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
