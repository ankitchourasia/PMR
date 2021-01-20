import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotBillDownloaderCcnbComponent } from './spot-bill-downloader-ccnb.component';

describe('SpotBillDownloaderCcnbComponent', () => {
  let component: SpotBillDownloaderCcnbComponent;
  let fixture: ComponentFixture<SpotBillDownloaderCcnbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotBillDownloaderCcnbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotBillDownloaderCcnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
