import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsOfGroupRDDatewiseComponent } from './readings-of-group-rd-datewise.component';

describe('ReadingsOfGroupRDDatewiseComponent', () => {
  let component: ReadingsOfGroupRDDatewiseComponent;
  let fixture: ComponentFixture<ReadingsOfGroupRDDatewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingsOfGroupRDDatewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsOfGroupRDDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
