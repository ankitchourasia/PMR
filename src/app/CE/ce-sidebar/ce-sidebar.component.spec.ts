import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeSidebarComponent } from './ce-sidebar.component';

describe('CeSidebarComponent', () => {
  let component: CeSidebarComponent;
  let fixture: ComponentFixture<CeSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
