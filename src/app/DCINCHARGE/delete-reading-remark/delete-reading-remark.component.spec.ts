import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReadingRemarkComponent } from './delete-reading-remark.component';

describe('DeleteReadingRemarkComponent', () => {
  let component: DeleteReadingRemarkComponent;
  let fixture: ComponentFixture<DeleteReadingRemarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteReadingRemarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReadingRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
