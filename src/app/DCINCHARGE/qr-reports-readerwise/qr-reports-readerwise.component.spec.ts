import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrReportsReaderwiseComponent } from './qr-reports-readerwise.component';

describe('QrReportsReaderwiseComponent', () => {
  let component: QrReportsReaderwiseComponent;
  let fixture: ComponentFixture<QrReportsReaderwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrReportsReaderwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrReportsReaderwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
