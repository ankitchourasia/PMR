import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWiseSpotBillCountComponent } from './group-wise-spot-bill-count.component';

describe('GroupWiseSpotBillCountComponent', () => {
  let component: GroupWiseSpotBillCountComponent;
  let fixture: ComponentFixture<GroupWiseSpotBillCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWiseSpotBillCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWiseSpotBillCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
