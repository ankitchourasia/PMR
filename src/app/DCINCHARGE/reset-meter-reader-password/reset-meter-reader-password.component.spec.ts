import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetMeterReaderPasswordComponent } from './reset-meter-reader-password.component';

describe('ResetMeterReaderPasswordComponent', () => {
  let component: ResetMeterReaderPasswordComponent;
  let fixture: ComponentFixture<ResetMeterReaderPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetMeterReaderPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetMeterReaderPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
