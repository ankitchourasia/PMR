import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedReadingsComponent } from './verified-readings.component';

describe('VerifiedReadingsComponent', () => {
  let component: VerifiedReadingsComponent;
  let fixture: ComponentFixture<VerifiedReadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedReadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
