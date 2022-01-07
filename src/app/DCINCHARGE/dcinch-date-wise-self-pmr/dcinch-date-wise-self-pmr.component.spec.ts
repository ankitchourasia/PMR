import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchDateWiseSelfPmrComponent } from './dcinch-date-wise-self-pmr.component';

describe('DcinchDateWiseSelfPmrComponent', () => {
  let component: DcinchDateWiseSelfPmrComponent;
  let fixture: ComponentFixture<DcinchDateWiseSelfPmrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchDateWiseSelfPmrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchDateWiseSelfPmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
