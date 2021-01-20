import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingOfGroupRDDatewiseGiComponent } from './reading-of-group-rd-datewise-gi.component';

describe('ReadingOfGroupRDDatewiseGiComponent', () => {
  let component: ReadingOfGroupRDDatewiseGiComponent;
  let fixture: ComponentFixture<ReadingOfGroupRDDatewiseGiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingOfGroupRDDatewiseGiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingOfGroupRDDatewiseGiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
