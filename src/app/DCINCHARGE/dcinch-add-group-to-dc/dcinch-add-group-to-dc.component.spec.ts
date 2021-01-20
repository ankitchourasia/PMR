import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchAddGroupToDcComponent } from './dcinch-add-group-to-dc.component';

describe('DcinchAddGroupToDcComponent', () => {
  let component: DcinchAddGroupToDcComponent;
  let fixture: ComponentFixture<DcinchAddGroupToDcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchAddGroupToDcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchAddGroupToDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
