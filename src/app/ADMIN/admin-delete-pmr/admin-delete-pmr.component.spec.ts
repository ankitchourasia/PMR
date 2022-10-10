import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeletePmrComponent } from './admin-delete-pmr.component';

describe('AdminDeletePmrComponent', () => {
  let component: AdminDeletePmrComponent;
  let fixture: ComponentFixture<AdminDeletePmrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeletePmrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeletePmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
