import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNormalReadingTypeToOtherComponent } from './edit-normal-reading-type-to-other.component';

describe('EditNormalReadingTypeToOtherComponent', () => {
  let component: EditNormalReadingTypeToOtherComponent;
  let fixture: ComponentFixture<EditNormalReadingTypeToOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNormalReadingTypeToOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNormalReadingTypeToOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
