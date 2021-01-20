import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDownloadedGroupFromNgbComponent } from './view-downloaded-group-from-ngb.component';

describe('ViewDownloadedGroupFromNgbComponent', () => {
  let component: ViewDownloadedGroupFromNgbComponent;
  let fixture: ComponentFixture<ViewDownloadedGroupFromNgbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDownloadedGroupFromNgbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDownloadedGroupFromNgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
