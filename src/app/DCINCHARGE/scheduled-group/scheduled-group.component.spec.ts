import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledGroupComponent } from './scheduled-group.component';

describe('ScheduledGroupComponent', () => {
  let component: ScheduledGroupComponent;
  let fixture: ComponentFixture<ScheduledGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
