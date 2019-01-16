import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CarState } from '@app/store/car/car-for-detail/car.state';
import { Car } from '@app/cars/shared/models/car.interface';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  AddCarForComparasionFirstPosition,
  AddCarForComparasionSecondPosition
} from '@app/store/car/cars-for-comparasion/car.actions';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarDetailComponent {
  @Select(CarState) car$: Observable<Car>;

  constructor(private _store: Store) {}

  setForFirstInComparasion(car: Car): void {
    this._store.dispatch(new AddCarForComparasionFirstPosition(car));
  }
  setForSecondInComparasion(car: Car): void {
    this._store.dispatch(new AddCarForComparasionSecondPosition(car));
  }
}
