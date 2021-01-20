import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillFileUploadComponent } from './bill-file-upload.component';

describe('BillFileUploadComponent', () => {
  let component: BillFileUploadComponent;
  let fixture: ComponentFixture<BillFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
