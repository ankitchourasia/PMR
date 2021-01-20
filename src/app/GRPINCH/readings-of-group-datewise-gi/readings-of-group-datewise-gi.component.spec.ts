import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsOfGroupDatewiseGiComponent } from './readings-of-group-datewise-gi.component';

describe('ReadingsOfGroupDatewiseGiComponent', () => {
  let component: ReadingsOfGroupDatewiseGiComponent;
  let fixture: ComponentFixture<ReadingsOfGroupDatewiseGiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingsOfGroupDatewiseGiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsOfGroupDatewiseGiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
