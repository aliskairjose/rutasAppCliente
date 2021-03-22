import { InicioPage } from './../inicio/inicio.page';
import { InicioPageModule } from './../inicio/inicio.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidemenuPage } from './sidemenu.page';
// import {InicioComponent} from '../../Components/inicio/inicio.component';
import {MapComponent} from '../../Components/map/map.component';
import { FeedbackPage } from '../feedback/feedback.page';
import { SoportePage } from '../soporte/soporte.page';

const routes: Routes = [
  {
    path: '',
    component: SidemenuPage,
    children: [
      {
        path: 'Inicio',
        component: InicioPage
      },
      {
        path: 'Feedback',
        component: FeedbackPage
      },
      {
        path: 'Soporte',
        component: SoportePage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemenuPageRoutingModule {}
