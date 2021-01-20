import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingAssesmentDataComponent } from './reading-assesment-data.component';

describe('ReadingAssesmentDataComponent', () => {
  let component: ReadingAssesmentDataComponent;
  let fixture: ComponentFixture<ReadingAssesmentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingAssesmentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingAssesmentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
