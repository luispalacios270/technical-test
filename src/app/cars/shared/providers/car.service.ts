import { Injectable } from '@angular/core';
import { CarResponse } from '@app/cars/shared/models/car.interface';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly jsonLocation = '/assets/cars.json';
  private _cars: CarResponse[];

  constructor(private _http: HttpClient) {}

  getCars(): Observable<CarResponse[]> {
    if (this._cars) {
      return of(this._cars);
    }

    return this._http
      .get(this.jsonLocation)
      .pipe(tap((cars: CarResponse[]) => (this._cars = cars)));
  }
}
