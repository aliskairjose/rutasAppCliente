import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.scss' ],
} )
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Rutas', url: '/folder/Rutas', icon: 'bus' },
    { title: 'Experiencia', url: '/folder/Experiencia', icon: 'medal' },
    { title: 'Soporte/Ayuda', url: '/folder/Soporte', icon: 'help-buoy' },
  ];
  public labels = [ 'Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders' ];
  constructor(
    private router: Router,
    private _auth: AuthService,
  ) {
    const isLoggedin = localStorage.getItem( '_cap_rp_token' );

    if ( isLoggedin ) {
      this.router.navigate( [ '/sidemenu/Inicio' ] );
    } else {
      this.router.navigate( [ '/initial' ] );
    }
  }
}
