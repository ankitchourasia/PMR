import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWiseDashboardBillmonthComponent } from './company-wise-dashboard-billmonth.component';

describe('CompanyWiseDashboardBillmonthComponent', () => {
  let component: CompanyWiseDashboardBillmonthComponent;
  let fixture: ComponentFixture<CompanyWiseDashboardBillmonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyWiseDashboardBillmonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyWiseDashboardBillmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
