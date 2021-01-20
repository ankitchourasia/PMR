import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderWiseDailyCountComponent } from './reader-wise-daily-count.component';

describe('ReaderWiseDailyCountComponent', () => {
  let component: ReaderWiseDailyCountComponent;
  let fixture: ComponentFixture<ReaderWiseDailyCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderWiseDailyCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderWiseDailyCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
