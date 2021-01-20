import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledAnRdToGIComponent } from './scheduled-an-rd-to-gi.component';

describe('ScheduledAnRdToGIComponent', () => {
  let component: ScheduledAnRdToGIComponent;
  let fixture: ComponentFixture<ScheduledAnRdToGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledAnRdToGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledAnRdToGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
