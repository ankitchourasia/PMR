import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleDivisionWiseDashboardComponent } from './circle-division-wise-dashboard.component';

describe('CircleDivisionWiseDashboardComponent', () => {
  let component: CircleDivisionWiseDashboardComponent;
  let fixture: ComponentFixture<CircleDivisionWiseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleDivisionWiseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleDivisionWiseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
