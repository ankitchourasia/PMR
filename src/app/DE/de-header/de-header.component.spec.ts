import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeHeaderComponent } from './de-header.component';

describe('DeHeaderComponent', () => {
  let component: DeHeaderComponent;
  let fixture: ComponentFixture<DeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
