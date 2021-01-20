import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterdefectiveReadingAssesmentComponent } from './meterdefective-reading-assesment.component';

describe('MeterdefectiveReadingAssesmentComponent', () => {
  let component: MeterdefectiveReadingAssesmentComponent;
  let fixture: ComponentFixture<MeterdefectiveReadingAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterdefectiveReadingAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterdefectiveReadingAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
