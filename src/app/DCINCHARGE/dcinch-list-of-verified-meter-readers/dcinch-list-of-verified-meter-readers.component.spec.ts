import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchListOfVerifiedMeterReadersComponent } from './dcinch-list-of-verified-meter-readers.component';

describe('DcinchListOfVerifiedMeterReadersComponent', () => {
  let component: DcinchListOfVerifiedMeterReadersComponent;
  let fixture: ComponentFixture<DcinchListOfVerifiedMeterReadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchListOfVerifiedMeterReadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchListOfVerifiedMeterReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
