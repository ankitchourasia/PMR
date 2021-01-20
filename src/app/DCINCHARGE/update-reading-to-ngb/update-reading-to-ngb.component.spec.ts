import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReadingToNgbComponent } from './update-reading-to-ngb.component';

describe('UpdateReadingToNgbComponent', () => {
  let component: UpdateReadingToNgbComponent;
  let fixture: ComponentFixture<UpdateReadingToNgbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReadingToNgbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReadingToNgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
