import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiHeaderComponent } from './gi-header.component';

describe('GiHeaderComponent', () => {
  let component: GiHeaderComponent;
  let fixture: ComponentFixture<GiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
