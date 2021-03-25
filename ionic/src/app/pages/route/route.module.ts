import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutePageRoutingModule } from './route-routing.module';

import { RoutePage } from './route.page';
import { SharedComponentsModule } from '../../Components/shared-components.module';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ RoutePage ]
} )
export class RoutePageModule { }
