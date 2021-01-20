import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionWiseDashboardComponent } from './region-wise-dashboard.component';

describe('RegionWiseDashboardComponent', () => {
  let component: RegionWiseDashboardComponent;
  let fixture: ComponentFixture<RegionWiseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionWiseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionWiseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
