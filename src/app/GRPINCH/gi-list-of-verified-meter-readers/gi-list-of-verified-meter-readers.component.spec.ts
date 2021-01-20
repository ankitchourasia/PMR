import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiListOfVerifiedMeterReadersComponent } from './gi-list-of-verified-meter-readers.component';

describe('GiListOfVerifiedMeterReadersComponent', () => {
  let component: GiListOfVerifiedMeterReadersComponent;
  let fixture: ComponentFixture<GiListOfVerifiedMeterReadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiListOfVerifiedMeterReadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiListOfVerifiedMeterReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
