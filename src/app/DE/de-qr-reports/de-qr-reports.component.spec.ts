import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeQrReportsComponent } from './de-qr-reports.component';

describe('DeQrReportsComponent', () => {
  let component: DeQrReportsComponent;
  let fixture: ComponentFixture<DeQrReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeQrReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeQrReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
