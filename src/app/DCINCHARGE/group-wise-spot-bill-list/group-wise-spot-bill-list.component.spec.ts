import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWiseSpotBillListComponent } from './group-wise-spot-bill-list.component';

describe('GroupWiseSpotBillListComponent', () => {
  let component: GroupWiseSpotBillListComponent;
  let fixture: ComponentFixture<GroupWiseSpotBillListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWiseSpotBillListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWiseSpotBillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
