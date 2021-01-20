import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsGorSingleConsumerGiComponent } from './readings-gor-single-consumer-gi.component';

describe('ReadingsGorSingleConsumerGiComponent', () => {
  let component: ReadingsGorSingleConsumerGiComponent;
  let fixture: ComponentFixture<ReadingsGorSingleConsumerGiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingsGorSingleConsumerGiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsGorSingleConsumerGiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
