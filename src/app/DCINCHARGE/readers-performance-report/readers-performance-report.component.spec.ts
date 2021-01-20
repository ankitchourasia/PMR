import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadersPerformanceReportComponent } from './readers-performance-report.component';

describe('ReadersPerformanceReportComponent', () => {
  let component: ReadersPerformanceReportComponent;
  let fixture: ComponentFixture<ReadersPerformanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadersPerformanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadersPerformanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
