import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveGroupsInGIComponent } from './active-groups-in-gi.component';

describe('ActiveGroupsInGIComponent', () => {
  let component: ActiveGroupsInGIComponent;
  let fixture: ComponentFixture<ActiveGroupsInGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveGroupsInGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveGroupsInGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
