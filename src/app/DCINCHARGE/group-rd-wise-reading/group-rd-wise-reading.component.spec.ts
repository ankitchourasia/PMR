import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRdWiseReadingComponent } from './group-rd-wise-reading.component';

describe('GroupRdWiseReadingComponent', () => {
  let component: GroupRdWiseReadingComponent;
  let fixture: ComponentFixture<GroupRdWiseReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupRdWiseReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRdWiseReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
