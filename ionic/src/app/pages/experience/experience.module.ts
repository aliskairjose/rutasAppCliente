import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencePageRoutingModule } from './experience-routing.module';

import { ExperiencePage } from './experience.page';
import { SharedComponentsModule } from '../../Components/shared-components.module';
import { RatingComponent } from '../../Components/rating/rating.component';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    ExperiencePageRoutingModule,
  ],
  declarations: [ ExperiencePage ],
  providers: [ RatingComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

} )
export class ExperiencePageModule { }
