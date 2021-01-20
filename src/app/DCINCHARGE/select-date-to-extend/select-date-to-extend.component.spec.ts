import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDateToExtendComponent } from './select-date-to-extend.component';

describe('SelectDateToExtendComponent', () => {
  let component: SelectDateToExtendComponent;
  let fixture: ComponentFixture<SelectDateToExtendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDateToExtendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDateToExtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
