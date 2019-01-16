import { Car } from 'src/app/cars/shared/models/car.interface';

export class AddCarForDetail {
  static readonly type = '[car] Add';
  constructor(public readonly payload: Car) {}
}
