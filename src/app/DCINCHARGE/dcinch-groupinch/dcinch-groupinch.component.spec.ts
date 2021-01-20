import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchGroupinchComponent } from './dcinch-groupinch.component';

describe('DcinchGroupinchComponent', () => {
  let component: DcinchGroupinchComponent;
  let fixture: ComponentFixture<DcinchGroupinchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchGroupinchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchGroupinchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
