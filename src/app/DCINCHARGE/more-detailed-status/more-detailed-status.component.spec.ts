import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailedStatusComponent } from './more-detailed-status.component';

describe('MoreDetailedStatusComponent', () => {
  let component: MoreDetailedStatusComponent;
  let fixture: ComponentFixture<MoreDetailedStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDetailedStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDetailedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
