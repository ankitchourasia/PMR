import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchMeterReaderImageComponent } from './dcinch-meter-reader-image.component';

describe('DcinchMeterReaderImageComponent', () => {
  let component: DcinchMeterReaderImageComponent;
  let fixture: ComponentFixture<DcinchMeterReaderImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchMeterReaderImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchMeterReaderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
