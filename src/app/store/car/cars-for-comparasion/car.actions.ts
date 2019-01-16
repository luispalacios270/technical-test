import { Car } from '@app/cars/shared/models/car.interface';

export class AddCarForComparasionFirstPosition {
  static readonly type = '[car] Add first';
  constructor(public readonly payload: Car) {}
}

export class AddCarForComparasionSecondPosition {
  static readonly type = '[car] Add Second';
  constructor(public readonly payload: Car) {}
}

export class RemoveCarForComparasionFirstPosition {
  static readonly type = '[car] Remove First';
  constructor(public readonly payload: string) {}
}

export class RemoveCarForComparasionSecondPosition {
  static readonly type = '[car] Remove Second';
  constructor(public readonly payload: string) {}
}
