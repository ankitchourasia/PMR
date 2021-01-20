import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeternotfoundReadingAssesmentComponent } from './meternotfound-reading-assesment.component';

describe('MeternotfoundReadingAssesmentComponent', () => {
  let component: MeternotfoundReadingAssesmentComponent;
  let fixture: ComponentFixture<MeternotfoundReadingAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeternotfoundReadingAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeternotfoundReadingAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
