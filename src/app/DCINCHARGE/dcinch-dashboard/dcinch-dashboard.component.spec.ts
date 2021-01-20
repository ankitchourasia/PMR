import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchDashboardComponent } from './dcinch-dashboard.component';

describe('DcinchDashboardComponent', () => {
  let component: DcinchDashboardComponent;
  let fixture: ComponentFixture<DcinchDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
