import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsOfMeterReaderComponent } from './assignments-of-meter-reader.component';

describe('AssignmentsOfMeterReaderComponent', () => {
  let component: AssignmentsOfMeterReaderComponent;
  let fixture: ComponentFixture<AssignmentsOfMeterReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentsOfMeterReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsOfMeterReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
