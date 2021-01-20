import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWiseDashboardComponent } from './company-wise-dashboard.component';

describe('CompanyWiseDashboardComponent', () => {
  let component: CompanyWiseDashboardComponent;
  let fixture: ComponentFixture<CompanyWiseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyWiseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyWiseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
