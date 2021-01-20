import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeHeaderComponent } from './ce-header.component';

describe('CeHeaderComponent', () => {
  let component: CeHeaderComponent;
  let fixture: ComponentFixture<CeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
