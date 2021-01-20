import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAssignmentsOfMeterReaderComponent } from './remove-assignments-of-meter-reader.component';

describe('RemoveAssignmentsOfMeterReaderComponent', () => {
  let component: RemoveAssignmentsOfMeterReaderComponent;
  let fixture: ComponentFixture<RemoveAssignmentsOfMeterReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAssignmentsOfMeterReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAssignmentsOfMeterReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
