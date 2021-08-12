import { InicioPage } from './../inicio/inicio.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidemenuPage } from './sidemenu.page';
// import {InicioComponent} from '../../Components/inicio/inicio.component';
import { FeedbackPage } from '../feedback/feedback.page';
import { SoportePage } from '../soporte/soporte.page';
import { RoutePage } from '../route/route.page';
import { ExperiencePage } from '../experience/experience.page';

const routes: Routes = [
  {
    path: '',
    component: SidemenuPage,
    children: [
      {
        path: 'Inicio',
        component: InicioPage,

      },
      {
        path: 'Feedback',
        component: FeedbackPage
      },
      {
        path: 'Soporte',
        component: SoportePage
      },
      {
        path: 'Rutas',
        component: RoutePage
      },
      {
        path: 'Experiencia',
        component: ExperiencePage
      }
    ]
  }
];
@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
} )
export class SidemenuPageRoutingModule { }
