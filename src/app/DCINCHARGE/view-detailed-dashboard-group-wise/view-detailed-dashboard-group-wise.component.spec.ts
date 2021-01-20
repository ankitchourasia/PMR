import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailedDashboardGroupWiseComponent } from './view-detailed-dashboard-group-wise.component';

describe('ViewDetailedDashboardGroupWiseComponent', () => {
  let component: ViewDetailedDashboardGroupWiseComponent;
  let fixture: ComponentFixture<ViewDetailedDashboardGroupWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailedDashboardGroupWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailedDashboardGroupWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
