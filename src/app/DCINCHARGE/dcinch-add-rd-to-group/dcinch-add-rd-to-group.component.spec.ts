import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchAddRdToGroupComponent } from './dcinch-add-rd-to-group.component';

describe('DcinchAddRdToGroupComponent', () => {
  let component: DcinchAddRdToGroupComponent;
  let fixture: ComponentFixture<DcinchAddRdToGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchAddRdToGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchAddRdToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
