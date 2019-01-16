import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListingComponent } from '@app/cars/car-listing/car-listing.component';
import { CarDetailComponent } from '@app/cars/car-detail/car-detail.component';
import { CarComparingComponent } from '@app/cars/car-comparing/car-comparing.component';
import { CarDetailGuard } from '@app/cars/shared/guards/car-detail.guard';

const routes: Routes = [
  { path: '', component: CarListingComponent },
  {
    path: 'detail',
    component: CarDetailComponent,
    canActivate: [CarDetailGuard]
  },
  { path: 'comparasion', component: CarComparingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {}
