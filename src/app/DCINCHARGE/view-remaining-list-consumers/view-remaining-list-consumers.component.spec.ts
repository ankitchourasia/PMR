import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRemainingListConsumersComponent } from './view-remaining-list-consumers.component';

describe('ViewRemainingListConsumersComponent', () => {
  let component: ViewRemainingListConsumersComponent;
  let fixture: ComponentFixture<ViewRemainingListConsumersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRemainingListConsumersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRemainingListConsumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
