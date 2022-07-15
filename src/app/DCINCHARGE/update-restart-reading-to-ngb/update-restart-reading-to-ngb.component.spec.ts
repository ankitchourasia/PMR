import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestartReadingToNgbComponent } from './update-restart-reading-to-ngb.component';

describe('UpdateRestartReadingToNgbComponent', () => {
  let component: UpdateRestartReadingToNgbComponent;
  let fixture: ComponentFixture<UpdateRestartReadingToNgbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRestartReadingToNgbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRestartReadingToNgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
