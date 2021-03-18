import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.scss' ],
} )
export class AppComponent implements OnInit {
  appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Rutas', url: '/folder/Rutas', icon: 'bus' },
    { title: 'Experiencia', url: '/folder/Experiencia', icon: 'medal' },
    { title: 'Soporte/Ayuda', url: '/folder/Soporte', icon: 'help-buoy' },
  ];
  labels = [ 'Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders' ];

  constructor(
    private router: Router,
    private _storage: StorageService,
  ) {

  }
  async ngOnInit() {
    const isLoggedin = await this._storage.get( 'rp_token' );
    const route = isLoggedin ? '/sidemenu/Inicio' : '/initial';
    this.router.navigate( [ route ] );
  }



}
