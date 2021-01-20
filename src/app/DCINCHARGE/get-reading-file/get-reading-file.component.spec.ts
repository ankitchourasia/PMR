import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReadingFileComponent } from './get-reading-file.component';

describe('GetReadingFileComponent', () => {
  let component: GetReadingFileComponent;
  let fixture: ComponentFixture<GetReadingFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetReadingFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReadingFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
