import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchHeaderComponent } from './dcinch-header.component';

describe('DcinchHeaderComponent', () => {
  let component: DcinchHeaderComponent;
  let fixture: ComponentFixture<DcinchHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
