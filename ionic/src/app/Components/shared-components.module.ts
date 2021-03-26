import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomDrawerComponent } from './bottom-drawer/bottom-drawer.component';
import { IonicModule } from '@ionic/angular';
import { RatingComponent } from './rating/rating.component';
import { CustomeTimePipe } from '../pipes/custome-time.pipe';
import { HeaderComponent } from './header/header.component';
import { CustomeFilterPipe } from '../pipes/custome-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule( {
  declarations: [
    BottomDrawerComponent,
    MapComponent,
    RatingComponent,
    CustomeTimePipe,
    CustomeFilterPipe,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
    BottomDrawerComponent,
    MapComponent,
    RatingComponent,
    CustomeTimePipe,
    CustomeFilterPipe,
    HeaderComponent
  ]
} )
export class SharedComponentsModule { }
