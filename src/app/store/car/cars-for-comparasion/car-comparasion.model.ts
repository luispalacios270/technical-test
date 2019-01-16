import { Car } from '@app/cars/shared/models/car.interface';

export interface CarComparasionModelState {
  firstCarToCompare: Car;
  secondCarToCompare: Car;
}
