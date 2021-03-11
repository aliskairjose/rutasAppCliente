import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomDrawerComponent } from './bottom-drawer/bottom-drawer.component';
import { IonicModule } from '@ionic/angular';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [BottomDrawerComponent, MapComponent, RatingComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [BottomDrawerComponent, MapComponent, RatingComponent]
})
export class SharedComponentsModule { }
