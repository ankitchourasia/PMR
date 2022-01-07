import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchGroupWiseSelfPmrComponent } from './dcinch-group-wise-self-pmr.component';

describe('DcinchGroupWiseSelfPmrComponent', () => {
  let component: DcinchGroupWiseSelfPmrComponent;
  let fixture: ComponentFixture<DcinchGroupWiseSelfPmrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchGroupWiseSelfPmrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchGroupWiseSelfPmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
