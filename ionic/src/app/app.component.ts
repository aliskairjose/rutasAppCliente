import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { TOKEN } from './constants/global-constants';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.scss' ],
} )
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private geolocation: Geolocation,
    private platform: Platform,
    private storage: StorageService,
  ) {
    this.initializeApp();
  }

  async ngOnInit() {

  }

  initializeApp(): void {
    this.platform.ready().then( async () => {
      const isLoggedin = await this.storage.get( TOKEN );
      const route = isLoggedin ? '/sidemenu/Inicio' : '/initial';
      this.router.navigate( [ route ] );
      await this.geolocation.getCurrentPosition();
    } );
  }
}
