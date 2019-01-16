import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CarState } from '@app/store/car/car-for-detail/car.state';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarDetailGuard implements CanActivate {
  private readonly noDetailCarSelectedMessage = 'Please, select a car before';

  constructor(private _store: Store, private _router: Router) {}

  canActivate(): Observable<boolean> {
    return this._store.selectOnce(CarState).pipe(
      map(selectedCar => !!Object.keys(selectedCar).length),
      tap(isThereACarSelected => {
        if (isThereACarSelected) {
          return;
        }
        alert(this.noDetailCarSelectedMessage);
        this._router.navigate(['/']);
      })
    );
  }
}
