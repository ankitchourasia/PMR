import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAnRdToReaderComponent } from './assign-an-rd-to-reader.component';

describe('AssignAnRdToReaderComponent', () => {
  let component: AssignAnRdToReaderComponent;
  let fixture: ComponentFixture<AssignAnRdToReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignAnRdToReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAnRdToReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
