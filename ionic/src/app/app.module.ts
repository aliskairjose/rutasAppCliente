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
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

import {iosTransitionAnimation} from "../../node_modules/@ionic/core/dist/collection/utils/transition/ios.transition.js"

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
    IonicModule.forRoot({  
      navAnimation: iosTransitionAnimation,
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NativePageTransitions],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  constructor(private userService: UserService) {
    userService.subscribeBackHandler();
  }
}
