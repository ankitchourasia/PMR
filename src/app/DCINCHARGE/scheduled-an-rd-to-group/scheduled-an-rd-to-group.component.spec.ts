import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledAnRdToGroupComponent } from './scheduled-an-rd-to-group.component';

describe('ScheduledAnRdToGroupComponent', () => {
  let component: ScheduledAnRdToGroupComponent;
  let fixture: ComponentFixture<ScheduledAnRdToGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledAnRdToGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledAnRdToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
