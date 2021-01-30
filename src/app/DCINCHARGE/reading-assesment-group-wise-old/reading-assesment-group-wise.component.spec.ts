import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingAssesmentGroupWiseComponent } from './reading-assesment-group-wise.component';

describe('ReadingAssesmentGroupWiseComponent', () => {
  let component: ReadingAssesmentGroupWiseComponent;
  let fixture: ComponentFixture<ReadingAssesmentGroupWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingAssesmentGroupWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingAssesmentGroupWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
