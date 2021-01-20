import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderwiseReadingComponent } from './readerwise-reading.component';

describe('ReaderwiseReadingComponent', () => {
  let component: ReaderwiseReadingComponent;
  let fixture: ComponentFixture<ReaderwiseReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderwiseReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderwiseReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
