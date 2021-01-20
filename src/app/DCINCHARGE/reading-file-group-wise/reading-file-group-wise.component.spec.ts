import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingFileGroupWiseComponent } from './reading-file-group-wise.component';

describe('ReadingFileGroupWiseComponent', () => {
  let component: ReadingFileGroupWiseComponent;
  let fixture: ComponentFixture<ReadingFileGroupWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingFileGroupWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingFileGroupWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
