import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComparingCardComponent } from './car-comparing-card.component';

describe('CarComparingCardComponent', () => {
  let component: CarComparingCardComponent;
  let fixture: ComponentFixture<CarComparingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarComparingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComparingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
