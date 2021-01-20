import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerWiseReadingComponent } from './consumer-wise-reading.component';

describe('ConsumerWiseReadingComponent', () => {
  let component: ConsumerWiseReadingComponent;
  let fixture: ComponentFixture<ConsumerWiseReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerWiseReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerWiseReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
