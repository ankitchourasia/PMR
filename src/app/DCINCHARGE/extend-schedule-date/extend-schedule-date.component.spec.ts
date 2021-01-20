import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendScheduleDateComponent } from './extend-schedule-date.component';

describe('ExtendScheduleDateComponent', () => {
  let component: ExtendScheduleDateComponent;
  let fixture: ComponentFixture<ExtendScheduleDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendScheduleDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendScheduleDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
