import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdQrCodeReportsComponent } from './md-qr-code-reports.component';

describe('MdQrCodeReportsComponent', () => {
  let component: MdQrCodeReportsComponent;
  let fixture: ComponentFixture<MdQrCodeReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdQrCodeReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdQrCodeReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
