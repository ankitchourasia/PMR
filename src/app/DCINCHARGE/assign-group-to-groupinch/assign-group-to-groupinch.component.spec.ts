import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignGroupToGroupinchComponent } from './assign-group-to-groupinch.component';

describe('AssignGroupToGroupinchComponent', () => {
  let component: AssignGroupToGroupinchComponent;
  let fixture: ComponentFixture<AssignGroupToGroupinchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignGroupToGroupinchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignGroupToGroupinchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
