import { MapComponent } from './map/map.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomDrawerComponent } from './bottom-drawer/bottom-drawer.component';
import { IonicModule } from '@ionic/angular';
import { RatingComponent } from './rating/rating.component';
import { CustomeTimePipe } from '../pipes/custome-time.pipe';
import { HeaderComponent } from './header/header.component';
import { RoutesFilterPipe } from '../pipes/routes-filter.pipe';
import { FormsModule } from '@angular/forms';
import { RoutePage } from '../pages/route/route.page';
import { TooltipsModule } from 'ionic4-tooltips';
import { BarRatingModule } from 'ngx-bar-rating';
import { DashboardPage } from '../pages/dashboard/dashboard.page';

@NgModule( {
  declarations: [
    BottomDrawerComponent,
    MapComponent,
    RatingComponent,
    CustomeTimePipe,
    RoutesFilterPipe,
    HeaderComponent,
    RoutePage,
    DashboardPage,
  ],
  imports: [
    BarRatingModule,
    CommonModule,
    IonicModule,
    FormsModule,
    TooltipsModule.forRoot(),
  ],
  exports: [
    BarRatingModule,
    BottomDrawerComponent,
    MapComponent,
    RatingComponent,
    CustomeTimePipe,
    RoutesFilterPipe,
    HeaderComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

} )
export class SharedComponentsModule { }
