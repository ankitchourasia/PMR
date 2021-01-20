import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KucchaPukkaSurveyReportComponent } from './kuccha-pukka-survey-report.component';

describe('KucchaPukkaSurveyReportComponent', () => {
  let component: KucchaPukkaSurveyReportComponent;
  let fixture: ComponentFixture<KucchaPukkaSurveyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KucchaPukkaSurveyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KucchaPukkaSurveyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
