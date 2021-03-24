import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomDrawerComponent } from './bottom-drawer/bottom-drawer.component';
import { IonicModule } from '@ionic/angular';
import { RatingComponent } from './rating/rating.component';
import { CustomeTimePipe } from '../pipes/custome-time.pipe';

@NgModule( {
  declarations: [
    BottomDrawerComponent,
    MapComponent,
    RatingComponent,
    CustomeTimePipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BottomDrawerComponent,
    MapComponent,
    RatingComponent,
    CustomeTimePipe
  ]
} )
export class SharedComponentsModule { }
