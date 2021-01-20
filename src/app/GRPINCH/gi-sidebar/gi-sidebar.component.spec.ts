import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiSidebarComponent } from './gi-sidebar.component';

describe('GiSidebarComponent', () => {
  let component: GiSidebarComponent;
  let fixture: ComponentFixture<GiSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
