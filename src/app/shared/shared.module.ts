import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { ImgSrcPipe } from './pipes/img-src.pipe';

const modules = [
  CommonModule,
  FormsModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatRippleModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule
];

@NgModule({
  imports: modules,
  declarations: [ImgSrcPipe],
  exports: [...modules, ImgSrcPipe]
})
export class SharedModule {}
