import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedReadingsComponent } from './rejected-readings.component';

describe('RejectedReadingsComponent', () => {
  let component: RejectedReadingsComponent;
  let fixture: ComponentFixture<RejectedReadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedReadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
