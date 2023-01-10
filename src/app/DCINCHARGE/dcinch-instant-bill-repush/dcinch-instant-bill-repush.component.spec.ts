import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchInstantBillRepushComponent } from './dcinch-instant-bill-repush.component';

describe('DcinchInstantBillRepushComponent', () => {
  let component: DcinchInstantBillRepushComponent;
  let fixture: ComponentFixture<DcinchInstantBillRepushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchInstantBillRepushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchInstantBillRepushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
