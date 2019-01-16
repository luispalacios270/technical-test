import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Car } from '@app/cars/shared/models/car.interface';

@Component({
  selector: 'app-car-comparing-card',
  templateUrl: './car-comparing-card.component.html',
  styleUrls: ['./car-comparing-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComparingCardComponent {
  @Input() car: Car;
}
