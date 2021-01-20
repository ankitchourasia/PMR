import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleDivisionDcwiseDashboardComponent } from './circle-division-dcwise-dashboard.component';

describe('CircleDivisionDcwiseDashboardComponent', () => {
  let component: CircleDivisionDcwiseDashboardComponent;
  let fixture: ComponentFixture<CircleDivisionDcwiseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleDivisionDcwiseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleDivisionDcwiseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
