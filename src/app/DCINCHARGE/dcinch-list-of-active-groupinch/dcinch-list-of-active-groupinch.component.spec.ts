import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchListOfActiveGroupinchComponent } from './dcinch-list-of-active-groupinch.component';

describe('DcinchListOfActiveGroupinchComponent', () => {
  let component: DcinchListOfActiveGroupinchComponent;
  let fixture: ComponentFixture<DcinchListOfActiveGroupinchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchListOfActiveGroupinchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchListOfActiveGroupinchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
