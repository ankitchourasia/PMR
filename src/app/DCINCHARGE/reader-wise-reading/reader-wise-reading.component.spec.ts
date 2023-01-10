import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderWiseReadingComponent } from './reader-wise-reading.component';

describe('ReaderWiseReadingComponent', () => {
  let component: ReaderWiseReadingComponent;
  let fixture: ComponentFixture<ReaderWiseReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderWiseReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderWiseReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
