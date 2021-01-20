import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assesment90To120ReadingComponent } from './assesment90-to120-reading.component';

describe('Assesment90To120ReadingComponent', () => {
  let component: Assesment90To120ReadingComponent;
  let fixture: ComponentFixture<Assesment90To120ReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assesment90To120ReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assesment90To120ReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
