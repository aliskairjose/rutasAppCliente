import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../interfaces/user';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';


@Component( {
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: [ './sidemenu.page.scss' ],
} )
export class SidemenuPage implements OnInit, OnChanges {

  backdropVisible = false;
  drawerVar = 'Inicio';
  activeRoute = 0;
  addressClicked = 0;
  user: User = {};
  abrv = '';

  appPages = [
    { title: 'Inicio', url: '/sidemenu/Inicio', icon: '../../../assets/prueba 1Recurso 29.png' },
    { title: 'Rutas', url: '/sidemenu/Rutas', icon: '../../../assets/prueba 1Recurso 30.png' },
    { title: 'Experiencia', url: '/sidemenu/Experiencia', icon: '../../../assets/prueba 1Recurso 31.png' },
    { title: 'Soporte/Ayuda', url: '/sidemenu/Soporte', icon: '../../../assets/prueba 1Recurso 32.png' }
  ];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private _storage: StorageService,
    private _auth: AuthService,
    private router: Router,
  ) {
    this.user = {};
    this._auth.authObserver().subscribe( ( user: any ) => {
      this.user = { ...user };
      const value = this.user.name.split( ' ' );
      this.abrv = `${value[ 0 ].charAt( 0 )}${value[ 1 ].charAt( 0 )}`;
    } );
  }

  ngOnChanges( changes: SimpleChanges ): void {
  }

  ngOnInit() {
    this._storage.get( 'rp_user' ).then( ( user: any ) => {
      this.user = { ...user };
      const value = this.user.name.split( ' ' );
      this.abrv = `${value[ 0 ].charAt( 0 )}${value[ 1 ].charAt( 0 )}`;
    } );
  }


  toggleBackdrop( isVisible ) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }

  logout() {
    localStorage.clear();
    this.router.navigate( [ '/signin' ] );
  }

  menuOptionClickHandle( p, i ) {
    this.activeRoute = i;
    this.drawerVar = p.title;
    this.router.navigate( [ p.url ] );
  }

}
