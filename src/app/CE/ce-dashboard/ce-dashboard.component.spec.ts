import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeDashboardComponent } from './ce-dashboard.component';

describe('CeDashboardComponent', () => {
  let component: CeDashboardComponent;
  let fixture: ComponentFixture<CeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
