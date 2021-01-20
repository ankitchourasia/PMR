import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReadingAssesmentComponent } from './edit-reading-assesment.component';

describe('EditReadingAssesmentComponent', () => {
  let component: EditReadingAssesmentComponent;
  let fixture: ComponentFixture<EditReadingAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReadingAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReadingAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
