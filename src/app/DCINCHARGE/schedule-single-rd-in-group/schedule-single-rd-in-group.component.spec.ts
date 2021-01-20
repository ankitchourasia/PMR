import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSingleRdInGroupComponent } from './schedule-single-rd-in-group.component';

describe('ScheduleSingleRdInGroupComponent', () => {
  let component: ScheduleSingleRdInGroupComponent;
  let fixture: ComponentFixture<ScheduleSingleRdInGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleSingleRdInGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSingleRdInGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
