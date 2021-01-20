import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiDashboardComponent } from './gi-dashboard.component';

describe('GiDashboardComponent', () => {
  let component: GiDashboardComponent;
  let fixture: ComponentFixture<GiDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
