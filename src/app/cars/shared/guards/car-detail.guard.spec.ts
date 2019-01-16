import { TestBed, async, inject } from '@angular/core/testing';

import { CarDetailGuard } from './car-detail.guard';

describe('CarDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarDetailGuard]
    });
  });

  it('should ...', inject([CarDetailGuard], (guard: CarDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
