import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCompleteGroupToReaderComponent } from './assign-complete-group-to-reader.component';

describe('AssignCompleteGroupToReaderComponent', () => {
  let component: AssignCompleteGroupToReaderComponent;
  let fixture: ComponentFixture<AssignCompleteGroupToReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignCompleteGroupToReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCompleteGroupToReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
