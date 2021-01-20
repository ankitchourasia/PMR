import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeSidebarComponent } from './de-sidebar.component';

describe('DeSidebarComponent', () => {
  let component: DeSidebarComponent;
  let fixture: ComponentFixture<DeSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
