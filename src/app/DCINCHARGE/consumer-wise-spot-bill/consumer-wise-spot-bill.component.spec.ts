import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerWiseSpotBillComponent } from './consumer-wise-spot-bill.component';

describe('ConsumerWiseSpotBillComponent', () => {
  let component: ConsumerWiseSpotBillComponent;
  let fixture: ComponentFixture<ConsumerWiseSpotBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerWiseSpotBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerWiseSpotBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
