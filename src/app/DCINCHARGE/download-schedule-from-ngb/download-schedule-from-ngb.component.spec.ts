import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadScheduleFromNgbComponent } from './download-schedule-from-ngb.component';

describe('DownloadScheduleFromNgbComponent', () => {
  let component: DownloadScheduleFromNgbComponent;
  let fixture: ComponentFixture<DownloadScheduleFromNgbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadScheduleFromNgbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadScheduleFromNgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
