import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleDashboardComponent } from './circle-dashboard.component';

describe('CircleDashboardComponent', () => {
  let component: CircleDashboardComponent;
  let fixture: ComponentFixture<CircleDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
