import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleSidebarComponent } from './circle-sidebar.component';

describe('CircleSidebarComponent', () => {
  let component: CircleSidebarComponent;
  let fixture: ComponentFixture<CircleSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
