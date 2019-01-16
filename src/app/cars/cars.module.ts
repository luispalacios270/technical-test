import { NgModule } from '@angular/core';
import { CarListingComponent } from './car-listing/car-listing.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarsRoutingModule } from './cars-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { CarSectionComponent } from './car-section/car-section.component';
import { CarComparingComponent } from './car-comparing/car-comparing.component';
import { CarComparingCardComponent } from './car-comparing-card/car-comparing-card.component';

@NgModule({
  declarations: [
    CarListingComponent,
    CarDetailComponent,
    HeaderComponent,
    CarSectionComponent,
    CarComparingComponent,
    CarComparingCardComponent
  ],
  imports: [SharedModule, CarsRoutingModule]
})
export class CarsModule {}
