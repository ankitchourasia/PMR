import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRdWiseConsumerGIComponent } from './group-rd-wise-consumer-gi.component';

describe('GroupRdWiseConsumerGIComponent', () => {
  let component: GroupRdWiseConsumerGIComponent;
  let fixture: ComponentFixture<GroupRdWiseConsumerGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupRdWiseConsumerGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRdWiseConsumerGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
