import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNormalReadingTypeComponent } from './edit-normal-reading-type.component';

describe('EditNormalReadingTypeComponent', () => {
  let component: EditNormalReadingTypeComponent;
  let fixture: ComponentFixture<EditNormalReadingTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNormalReadingTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNormalReadingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
