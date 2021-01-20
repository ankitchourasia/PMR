import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdKucchaPukkaSurveyReportComponent } from './md-kuccha-pukka-survey-report.component';

describe('MdKucchaPukkaSurveyReportComponent', () => {
  let component: MdKucchaPukkaSurveyReportComponent;
  let fixture: ComponentFixture<MdKucchaPukkaSurveyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdKucchaPukkaSurveyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdKucchaPukkaSurveyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
