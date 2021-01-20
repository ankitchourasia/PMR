import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingStatusGroupWiseComponent } from './reading-status-group-wise.component';

describe('ReadingStatusGroupWiseComponent', () => {
  let component: ReadingStatusGroupWiseComponent;
  let fixture: ComponentFixture<ReadingStatusGroupWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingStatusGroupWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingStatusGroupWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
