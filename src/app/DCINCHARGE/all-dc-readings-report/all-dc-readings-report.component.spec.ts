import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDcReadingsReportComponent } from './all-dc-readings-report.component';

describe('AllDcReadingsReportComponent', () => {
  let component: AllDcReadingsReportComponent;
  let fixture: ComponentFixture<AllDcReadingsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDcReadingsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDcReadingsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
