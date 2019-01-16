import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { CarResponse } from '@app/cars/shared/models/car.interface';
import { CarService } from '@app/cars/shared/providers/car.service';

@Component({
  selector: 'app-car-listing',
  templateUrl: './car-listing.component.html',
  styleUrls: ['./car-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarListingComponent implements OnInit {
  filteredCars: CarResponse[] = [];
  private _totalCars: CarResponse[] = [];

  constructor(
    private _carService: CarService,
    private _changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._carService.getCars().subscribe(cars => {
      this.filteredCars = this._totalCars = cars;
      this._changeDetectionRef.markForCheck();
    });
  }

  filterCars(brandToFilter: string): void {
    this.filteredCars = !brandToFilter
      ? this._totalCars
      : this._filterList(brandToFilter);
  }

  private _filterList(brandToFilter: string): CarResponse[] {
    return this._totalCars.filter(
      car =>
        car.brand &&
        car.brand.toLowerCase().includes(brandToFilter.toLowerCase())
    );
  }
}
