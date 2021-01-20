import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyReportOverallCompanyComponent } from './survey-report-overall-company.component';

describe('SurveyReportOverallCompanyComponent', () => {
  let component: SurveyReportOverallCompanyComponent;
  let fixture: ComponentFixture<SurveyReportOverallCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyReportOverallCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyReportOverallCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
