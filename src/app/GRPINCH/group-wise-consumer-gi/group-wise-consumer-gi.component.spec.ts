import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWiseConsumerGIComponent } from './group-wise-consumer-gi.component';

describe('GroupWiseConsumerGIComponent', () => {
  let component: GroupWiseConsumerGIComponent;
  let fixture: ComponentFixture<GroupWiseConsumerGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWiseConsumerGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWiseConsumerGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
