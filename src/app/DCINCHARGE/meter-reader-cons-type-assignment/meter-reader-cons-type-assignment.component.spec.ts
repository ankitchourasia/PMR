import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterReaderConsTypeAssignmentComponent } from './meter-reader-cons-type-assignment.component';

describe('MeterReaderConsTypeAssignmentComponent', () => {
  let component: MeterReaderConsTypeAssignmentComponent;
  let fixture: ComponentFixture<MeterReaderConsTypeAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterReaderConsTypeAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterReaderConsTypeAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
