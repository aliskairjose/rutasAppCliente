import { SoportePageModule } from './pages/soporte/soporte.module';
import { InicioPageModule } from './pages/inicio/inicio.module';
import { environment } from './../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidemenuPageModule } from './pages/sidemenu/sidemenu.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {UserService} from './services/user.service';
import { FeedbackPageModule } from './pages/feedback/feedback.module';
import { RatingComponent } from './Components/rating/rating.component';



@NgModule({
  declarations: [AppComponent,
    
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot({mode: 'md'}),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SidemenuPageModule,
    SoportePageModule,
    InicioPageModule,
    FeedbackPageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private userService: UserService) {
    userService.subscribeBackHandler();
  }
}
