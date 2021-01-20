import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAllAssignmentsToReaderGIComponent } from './list-of-all-assignments-to-reader-gi.component';

describe('ListOfAllAssignmentsToReaderGIComponent', () => {
  let component: ListOfAllAssignmentsToReaderGIComponent;
  let fixture: ComponentFixture<ListOfAllAssignmentsToReaderGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfAllAssignmentsToReaderGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAllAssignmentsToReaderGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
