import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchNonVerifiedMeterReadersComponent } from './dcinch-non-verified-meter-readers.component';

describe('DcinchNonVerifiedMeterReadersComponent', () => {
  let component: DcinchNonVerifiedMeterReadersComponent;
  let fixture: ComponentFixture<DcinchNonVerifiedMeterReadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchNonVerifiedMeterReadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchNonVerifiedMeterReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
