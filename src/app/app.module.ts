import { SoportePageModule } from './pages/soporte/soporte.module';
import { InicioPageModule } from './pages/inicio/inicio.module';
import { environment } from './../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidemenuPageModule } from './pages/sidemenu/sidemenu.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './services/user.service';
import { FeedbackPageModule } from './pages/feedback/feedback.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarRatingModule } from 'ngx-bar-rating';
import { registerLocaleData } from '@angular/common';
import { Camera } from '@ionic-native/camera/ngx';
import localeEs from '@angular/common/locales/es';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { PusherService } from './services/pusher.service';
import { AgmCoreModule } from '@agm/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

registerLocaleData( localeEs );
@NgModule( {
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BarRatingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    IonicModule.forRoot( { mode: 'md' } ),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidemenuPageModule,
    SoportePageModule,
    InicioPageModule,
    FeedbackPageModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    GooglePlus,
    Camera,
    Geolocation,
    BarcodeScanner,
    PusherService,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [ AppComponent ],
} )
export class AppModule {
  constructor( private userService: UserService ) {
    userService.subscribeBackHandler();
  }
}
