import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCreatedScheduleComponent } from './list-of-created-schedule.component';

describe('ListOfCreatedScheduleComponent', () => {
  let component: ListOfCreatedScheduleComponent;
  let fixture: ComponentFixture<ListOfCreatedScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfCreatedScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCreatedScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
