import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Above120ReadingAssesmentComponent } from './above120-reading-assesment.component';

describe('Above120ReadingAssesmentComponent', () => {
  let component: Above120ReadingAssesmentComponent;
  let fixture: ComponentFixture<Above120ReadingAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Above120ReadingAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Above120ReadingAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
