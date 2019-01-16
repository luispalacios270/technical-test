import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CarComparasionState } from '@app/store/car/cars-for-comparasion/car.state';
import { Observable } from 'rxjs';
import { Car } from '@app/cars/shared/models/car.interface';
import {
  RemoveCarForComparasionFirstPosition,
  RemoveCarForComparasionSecondPosition
} from '@app/store/car/cars-for-comparasion/car.actions';
import { fade } from '@app/animations/fade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fade]
})
export class HeaderComponent {
  userIsSearching = false;

  @Select(CarComparasionState.getFirstCar)
  firstCarForCompare$: Observable<Car>;
  @Select(CarComparasionState.getSecondCar)
  secondCarForCompare$: Observable<Car>;

  @Input() hasBackButton = false;
  @Input() hasSearchButton = true;
  @Input() showComparingBar = true;

  @Output() textToSearch: EventEmitter<string> = new EventEmitter();

  constructor(
    private _changeDetectionRef: ChangeDetectorRef,
    private _store: Store
  ) {}

  makeSearch(): void {
    this.userIsSearching = true;
    this._updateChanges();
  }

  search({ searchCriteria }: { searchCriteria: string }) {
    this.textToSearch.emit(searchCriteria);
  }

  endSearch(): void {
    this.userIsSearching = false;
    this._updateChanges();
    this.textToSearch.emit();
  }

  removeFirstCar(): void {
    this._store.dispatch(new RemoveCarForComparasionFirstPosition(undefined));
  }

  removeSecondCar(): void {
    this._store.dispatch(new RemoveCarForComparasionSecondPosition(undefined));
  }

  private _updateChanges(): void {
    this._changeDetectionRef.markForCheck();
  }
}
