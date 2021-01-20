import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchListOfDeactiveGroupsComponent } from './dcinch-list-of-deactive-groups.component';

describe('DcinchListOfDeactiveGroupsComponent', () => {
  let component: DcinchListOfDeactiveGroupsComponent;
  let fixture: ComponentFixture<DcinchListOfDeactiveGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchListOfDeactiveGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchListOfDeactiveGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
