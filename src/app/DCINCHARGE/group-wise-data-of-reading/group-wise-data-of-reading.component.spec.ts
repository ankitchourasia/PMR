import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWiseDataOfReadingComponent } from './group-wise-data-of-reading.component';

describe('GroupWiseDataOfReadingComponent', () => {
  let component: GroupWiseDataOfReadingComponent;
  let fixture: ComponentFixture<GroupWiseDataOfReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupWiseDataOfReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWiseDataOfReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
