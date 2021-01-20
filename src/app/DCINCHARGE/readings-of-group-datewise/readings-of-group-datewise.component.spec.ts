import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsOfGroupDatewiseComponent } from './readings-of-group-datewise.component';

describe('ReadingsOfGroupDatewiseComponent', () => {
  let component: ReadingsOfGroupDatewiseComponent;
  let fixture: ComponentFixture<ReadingsOfGroupDatewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingsOfGroupDatewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsOfGroupDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
