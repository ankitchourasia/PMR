import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingListConsumersComponent } from './remaining-list-consumers.component';

describe('RemainingListConsumersComponent', () => {
  let component: RemainingListConsumersComponent;
  let fixture: ComponentFixture<RemainingListConsumersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingListConsumersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingListConsumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
