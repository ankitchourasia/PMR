import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLowConsumptionReportComponent } from './high-low-consumption-report.component';

describe('HighLowConsumptionReportComponent', () => {
  let component: HighLowConsumptionReportComponent;
  let fixture: ComponentFixture<HighLowConsumptionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighLowConsumptionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighLowConsumptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
