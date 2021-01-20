import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleWiseDashboardComponent } from './circle-wise-dashboard.component';

describe('CircleWiseDashboardComponent', () => {
  let component: CircleWiseDashboardComponent;
  let fixture: ComponentFixture<CircleWiseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleWiseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleWiseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
