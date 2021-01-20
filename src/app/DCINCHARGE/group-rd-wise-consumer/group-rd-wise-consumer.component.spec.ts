import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRdWiseConsumerComponent } from './group-rd-wise-consumer.component';

describe('GroupRdWiseConsumerComponent', () => {
  let component: GroupRdWiseConsumerComponent;
  let fixture: ComponentFixture<GroupRdWiseConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupRdWiseConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRdWiseConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
