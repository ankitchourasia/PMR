import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchChangepassComponent } from './dcinch-changepass.component';

describe('DcinchChangepassComponent', () => {
  let component: DcinchChangepassComponent;
  let fixture: ComponentFixture<DcinchChangepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchChangepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchChangepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
