import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Below90ReadingAssesmentComponent } from './below90-reading-assesment.component';

describe('Below90ReadingAssesmentComponent', () => {
  let component: Below90ReadingAssesmentComponent;
  let fixture: ComponentFixture<Below90ReadingAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Below90ReadingAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Below90ReadingAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
