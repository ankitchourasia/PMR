import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchListOfRdsInGroupsComponent } from './dcinch-list-of-rds-in-groups.component';

describe('DcinchListOfRdsInGroupsComponent', () => {
  let component: DcinchListOfRdsInGroupsComponent;
  let fixture: ComponentFixture<DcinchListOfRdsInGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchListOfRdsInGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchListOfRdsInGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
