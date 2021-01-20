import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcinchSidebarComponent } from './dcinch-sidebar.component';

describe('DcinchSidebarComponent', () => {
  let component: DcinchSidebarComponent;
  let fixture: ComponentFixture<DcinchSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcinchSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcinchSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
