import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiNonVerifiedMeterReadersComponent } from './gi-non-verified-meter-readers.component';

describe('GiNonVerifiedMeterReadersComponent', () => {
  let component: GiNonVerifiedMeterReadersComponent;
  let fixture: ComponentFixture<GiNonVerifiedMeterReadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiNonVerifiedMeterReadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiNonVerifiedMeterReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
