import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchListOfRejectedMeterReadersComponent } from './dcinch-list-of-rejected-meter-readers.component';

describe('DcinchListOfRejectedMeterReadersComponent', () => {
  let component: DcinchListOfRejectedMeterReadersComponent;
  let fixture: ComponentFixture<DcinchListOfRejectedMeterReadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchListOfRejectedMeterReadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchListOfRejectedMeterReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
