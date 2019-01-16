import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CarResponse, Car } from '@app/cars/shared/models/car.interface';
import { Store } from '@ngxs/store';
import { AddCarForDetail } from '@app/store/car/car-for-detail/car.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-section',
  templateUrl: './car-section.component.html',
  styleUrls: ['./car-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarSectionComponent {
  @Input() carsGroup: CarResponse;

  constructor(private _store: Store, private _router: Router) {}

  goToDetailPage(car: Car): void {
    this._store
      .dispatch(new AddCarForDetail(car))
      .subscribe(() => this._router.navigate(['/cars/detail']));
  }

  trackByFn(index: number): number {
    return index;
  }
}
