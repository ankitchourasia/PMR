import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRdsToMeterReaderComponent } from './assign-rds-to-meter-reader.component';

describe('AssignRdsToMeterReaderComponent', () => {
  let component: AssignRdsToMeterReaderComponent;
  let fixture: ComponentFixture<AssignRdsToMeterReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignRdsToMeterReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRdsToMeterReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
