import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingStatusRdWiseComponent } from './reading-status-rd-wise.component';

describe('ReadingStatusRdWiseComponent', () => {
  let component: ReadingStatusRdWiseComponent;
  let fixture: ComponentFixture<ReadingStatusRdWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingStatusRdWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingStatusRdWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
