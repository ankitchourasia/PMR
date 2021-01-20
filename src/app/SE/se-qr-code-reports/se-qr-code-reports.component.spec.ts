import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeQrCodeReportsComponent } from './se-qr-code-reports.component';

describe('SeQrCodeReportsComponent', () => {
  let component: SeQrCodeReportsComponent;
  let fixture: ComponentFixture<SeQrCodeReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeQrCodeReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeQrCodeReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
