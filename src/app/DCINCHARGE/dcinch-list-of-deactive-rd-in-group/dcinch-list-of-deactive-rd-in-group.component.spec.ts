import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchListOfDeactiveRdInGroupComponent } from './dcinch-list-of-deactive-rd-in-group.component';

describe('DcinchListOfDeactiveRdInGroupComponent', () => {
  let component: DcinchListOfDeactiveRdInGroupComponent;
  let fixture: ComponentFixture<DcinchListOfDeactiveRdInGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchListOfDeactiveRdInGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchListOfDeactiveRdInGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
