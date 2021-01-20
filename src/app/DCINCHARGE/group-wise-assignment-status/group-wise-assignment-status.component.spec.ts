import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWiseAssignmentStatusComponent } from './group-wise-assignment-status.component';

describe('GroupWiseAssignmentStatusComponent', () => {
  let component: GroupWiseAssignmentStatusComponent;
  let fixture: ComponentFixture<GroupWiseAssignmentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWiseAssignmentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWiseAssignmentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
