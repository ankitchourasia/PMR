import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchSmartMeterReportComponent } from './dcinch-smart-meter-report.component';

describe('DcinchSmartMeterReportComponent', () => {
  let component: DcinchSmartMeterReportComponent;
  let fixture: ComponentFixture<DcinchSmartMeterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchSmartMeterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchSmartMeterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
