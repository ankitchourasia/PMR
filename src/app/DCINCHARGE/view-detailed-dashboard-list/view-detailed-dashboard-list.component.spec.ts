import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailedDashboardListComponent } from './view-detailed-dashboard-list.component';

describe('ViewDetailedDashboardListComponent', () => {
  let component: ViewDetailedDashboardListComponent;
  let fixture: ComponentFixture<ViewDetailedDashboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailedDashboardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailedDashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
