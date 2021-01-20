import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingForVerificationComponent } from './reading-for-verification.component';

describe('ReadingForVerificationComponent', () => {
  let component: ReadingForVerificationComponent;
  let fixture: ComponentFixture<ReadingForVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingForVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingForVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
