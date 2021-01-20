import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRejectedFilesFromNgbComponent } from './view-rejected-files-from-ngb.component';

describe('ViewRejectedFilesFromNgbComponent', () => {
  let component: ViewRejectedFilesFromNgbComponent;
  let fixture: ComponentFixture<ViewRejectedFilesFromNgbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRejectedFilesFromNgbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRejectedFilesFromNgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
