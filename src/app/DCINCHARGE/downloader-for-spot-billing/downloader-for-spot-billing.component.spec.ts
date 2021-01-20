import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloaderForSpotBillingComponent } from './downloader-for-spot-billing.component';

describe('DownloaderForSpotBillingComponent', () => {
  let component: DownloaderForSpotBillingComponent;
  let fixture: ComponentFixture<DownloaderForSpotBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloaderForSpotBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloaderForSpotBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
