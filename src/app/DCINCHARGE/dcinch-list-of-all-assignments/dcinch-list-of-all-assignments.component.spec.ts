import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchListOfAllAssignmentsComponent } from './dcinch-list-of-all-assignments.component';

describe('DcinchListOfAllAssignmentsComponent', () => {
  let component: DcinchListOfAllAssignmentsComponent;
  let fixture: ComponentFixture<DcinchListOfAllAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchListOfAllAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchListOfAllAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
