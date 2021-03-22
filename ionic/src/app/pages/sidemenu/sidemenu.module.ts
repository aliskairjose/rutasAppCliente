import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidemenuPageRoutingModule } from './sidemenu-routing.module';
import { SharedComponentsModule } from 'src/app/Components/shared-components.module';


import { SidemenuPage } from './sidemenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidemenuPageRoutingModule,
    SharedComponentsModule,
    
  ],
  declarations: [SidemenuPage],
  exports: []
})
export class SidemenuPageModule {}
