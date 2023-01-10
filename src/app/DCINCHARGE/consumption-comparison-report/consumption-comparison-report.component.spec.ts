import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionComparisonReportComponent } from './consumption-comparison-report.component';

describe('ConsumptionComparisonReportComponent', () => {
  let component: ConsumptionComparisonReportComponent;
  let fixture: ComponentFixture<ConsumptionComparisonReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumptionComparisonReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionComparisonReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
