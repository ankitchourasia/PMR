import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMeterChangeFileComponent } from './get-meter-change-file.component';

describe('GetMeterChangeFileComponent', () => {
  let component: GetMeterChangeFileComponent;
  let fixture: ComponentFixture<GetMeterChangeFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMeterChangeFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMeterChangeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
