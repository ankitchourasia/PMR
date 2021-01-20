import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchListOfGroupsInDcComponent } from './dcinch-list-of-groups-in-dc.component';

describe('DcinchListOfGroupsInDcComponent', () => {
  let component: DcinchListOfGroupsInDcComponent;
  let fixture: ComponentFixture<DcinchListOfGroupsInDcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchListOfGroupsInDcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchListOfGroupsInDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
