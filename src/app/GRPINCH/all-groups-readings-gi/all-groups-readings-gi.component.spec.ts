import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGroupsReadingsGiComponent } from './all-groups-readings-gi.component';

describe('AllGroupsReadingsGiComponent', () => {
  let component: AllGroupsReadingsGiComponent;
  let fixture: ComponentFixture<AllGroupsReadingsGiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGroupsReadingsGiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGroupsReadingsGiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
