import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStatusOfUploadedFilesToNgbComponent } from './check-status-of-uploaded-files-to-ngb.component';

describe('CheckStatusOfUploadedFilesToNgbComponent', () => {
  let component: CheckStatusOfUploadedFilesToNgbComponent;
  let fixture: ComponentFixture<CheckStatusOfUploadedFilesToNgbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStatusOfUploadedFilesToNgbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStatusOfUploadedFilesToNgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
