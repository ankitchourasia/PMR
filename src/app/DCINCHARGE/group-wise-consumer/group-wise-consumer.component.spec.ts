import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWiseConsumerComponent } from './group-wise-consumer.component';

describe('GroupWiseConsumerComponent', () => {
  let component: GroupWiseConsumerComponent;
  let fixture: ComponentFixture<GroupWiseConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWiseConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWiseConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
