import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAndVerifyReadingsComponent } from './update-and-verify-readings.component';

describe('UpdateAndVerifyReadingsComponent', () => {
  let component: UpdateAndVerifyReadingsComponent;
  let fixture: ComponentFixture<UpdateAndVerifyReadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAndVerifyReadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAndVerifyReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
