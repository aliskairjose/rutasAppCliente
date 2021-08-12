import { SharedComponentsModule } from 'src/app/Components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';   // agm-direction

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    SharedComponentsModule,
    AgmCoreModule.forRoot( {
      apiKey: 'AIzaSyAFfkk5FtmXgIsbHQzmEXsyFOACA4Jj_oY'
    } ),
    AgmDirectionModule
  ],
  declarations: [ InicioPage ]
} )
export class InicioPageModule { }
