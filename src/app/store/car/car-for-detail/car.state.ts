import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddCarForDetail } from './car.actions';
import { Car } from 'src/app/cars/shared/models/car.interface';

@State<Car>({
  name: 'carForDetail',
  defaults: undefined
})
export class CarState {
  @Selector() static getCar(state: Car): Car {
    return state;
  }

  @Action(AddCarForDetail)
  addCar(
    { patchState }: StateContext<Car>,
    { payload }: AddCarForDetail
  ): void {
    patchState({ ...payload });
  }
}
