import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select } from '@ngxs/store';
import { CarComparasionState } from '@app/store/car/cars-for-comparasion/car.state';
import { Car } from '@app/cars/shared/models/car.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-comparing',
  templateUrl: './car-comparing.component.html',
  styleUrls: ['./car-comparing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComparingComponent {
  @Select(CarComparasionState.getFirstCar) firstCar$: Observable<Car>;
  @Select(CarComparasionState.getSecondCar) secondCar$: Observable<Car>;
}
