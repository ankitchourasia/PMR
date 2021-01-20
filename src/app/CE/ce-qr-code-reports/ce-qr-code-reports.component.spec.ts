import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeQrCodeReportsComponent } from './ce-qr-code-reports.component';

describe('CeQrCodeReportsComponent', () => {
  let component: CeQrCodeReportsComponent;
  let fixture: ComponentFixture<CeQrCodeReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeQrCodeReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeQrCodeReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
