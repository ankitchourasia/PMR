import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiListOfRejectedMeterReadersComponent } from './gi-list-of-rejected-meter-readers.component';

describe('GiListOfRejectedMeterReadersComponent', () => {
  let component: GiListOfRejectedMeterReadersComponent;
  let fixture: ComponentFixture<GiListOfRejectedMeterReadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiListOfRejectedMeterReadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiListOfRejectedMeterReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
