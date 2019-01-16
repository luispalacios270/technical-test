import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComparingComponent } from './car-comparing.component';

describe('CarComparingComponent', () => {
  let component: CarComparingComponent;
  let fixture: ComponentFixture<CarComparingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarComparingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComparingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
