import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampReaderWiseReadingComponent } from './timestamp-reader-wise-reading.component';

describe('TimestampReaderWiseReadingComponent', () => {
  let component: TimestampReaderWiseReadingComponent;
  let fixture: ComponentFixture<TimestampReaderWiseReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimestampReaderWiseReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampReaderWiseReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
