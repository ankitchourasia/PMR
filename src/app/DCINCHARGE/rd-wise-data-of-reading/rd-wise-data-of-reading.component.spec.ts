import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdWiseDataOfReadingComponent } from './rd-wise-data-of-reading.component';

describe('RdWiseDataOfReadingComponent', () => {
  let component: RdWiseDataOfReadingComponent;
  let fixture: ComponentFixture<RdWiseDataOfReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdWiseDataOfReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdWiseDataOfReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
