import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAllAssignmentsToReaderComponent } from './list-of-all-assignments-to-reader.component';

describe('ListOfAllAssignmentsToReaderComponent', () => {
  let component: ListOfAllAssignmentsToReaderComponent;
  let fixture: ComponentFixture<ListOfAllAssignmentsToReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfAllAssignmentsToReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAllAssignmentsToReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
