import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdHeaderComponent } from './md-header.component';

describe('MdHeaderComponent', () => {
  let component: MdHeaderComponent;
  let fixture: ComponentFixture<MdHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
