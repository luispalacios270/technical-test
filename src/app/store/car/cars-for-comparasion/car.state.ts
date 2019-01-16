import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CarComparasionModelState } from '@app/store/car/cars-for-comparasion/car-comparasion.model';
import { Car } from '@app/cars/shared/models/car.interface';
import {
  AddCarForComparasionFirstPosition,
  AddCarForComparasionSecondPosition,
  RemoveCarForComparasionFirstPosition,
  RemoveCarForComparasionSecondPosition
} from '@app/store/car/cars-for-comparasion/car.actions';

@State<CarComparasionModelState>({
  name: 'carForComparing',
  defaults: {
    firstCarToCompare: undefined,
    secondCarToCompare: undefined
  }
})
export class CarComparasionState {
  @Selector() static getFirstCar(state: CarComparasionModelState): Car {
    return state.firstCarToCompare;
  }

  @Selector() static getSecondCar(state: CarComparasionModelState): Car {
    return state.secondCarToCompare;
  }

  @Action(AddCarForComparasionFirstPosition)
  addCarForComparasionFirstPosition(
    { getState, patchState }: StateContext<CarComparasionModelState>,
    { payload }: AddCarForComparasionFirstPosition
  ): void {
    patchState({ ...getState(), firstCarToCompare: payload });
  }

  @Action(AddCarForComparasionSecondPosition)
  addCarForComparasionSecondPosition(
    { getState, patchState }: StateContext<CarComparasionModelState>,
    { payload }: AddCarForComparasionSecondPosition
  ): void {
    patchState({ ...getState(), secondCarToCompare: payload });
  }

  @Action(RemoveCarForComparasionFirstPosition)
  removeCarForComparasionFirstPosition({
    getState,
    patchState
  }: StateContext<CarComparasionModelState>): void {
    patchState({ ...getState(), firstCarToCompare: undefined });
  }

  @Action(RemoveCarForComparasionSecondPosition)
  removeCarForComparasionSecondPosition({
    getState,
    patchState
  }: StateContext<CarComparasionModelState>): void {
    patchState({ ...getState(), secondCarToCompare: undefined });
  }
}
