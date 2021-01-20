import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingForSingleConsumerComponent } from './reading-for-single-consumer.component';

describe('ReadingForSingleConsumerComponent', () => {
  let component: ReadingForSingleConsumerComponent;
  let fixture: ComponentFixture<ReadingForSingleConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingForSingleConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingForSingleConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
