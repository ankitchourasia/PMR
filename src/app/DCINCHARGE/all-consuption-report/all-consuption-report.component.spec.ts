import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConsuptionReportComponent } from './all-consuption-report.component';

describe('AllConsuptionReportComponent', () => {
  let component: AllConsuptionReportComponent;
  let fixture: ComponentFixture<AllConsuptionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllConsuptionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllConsuptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
