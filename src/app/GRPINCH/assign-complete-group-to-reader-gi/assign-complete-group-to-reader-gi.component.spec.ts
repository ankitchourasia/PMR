import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCompleteGroupToReaderGIComponent } from './assign-complete-group-to-reader-gi.component';

describe('AssignCompleteGroupToReaderGIComponent', () => {
  let component: AssignCompleteGroupToReaderGIComponent;
  let fixture: ComponentFixture<AssignCompleteGroupToReaderGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignCompleteGroupToReaderGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCompleteGroupToReaderGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
