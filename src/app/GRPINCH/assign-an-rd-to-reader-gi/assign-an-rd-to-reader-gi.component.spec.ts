import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAnRdToReaderGiComponent } from './assign-an-rd-to-reader-gi.component';

describe('AssignAnRdToReaderGiComponent', () => {
  let component: AssignAnRdToReaderGiComponent;
  let fixture: ComponentFixture<AssignAnRdToReaderGiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignAnRdToReaderGiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAnRdToReaderGiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
