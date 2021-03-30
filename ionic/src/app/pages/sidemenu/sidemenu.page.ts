import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../interfaces/user';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';
import { LOGO, USER } from '../../constants/global-constants';
import { UserService } from '../../services/user.service';


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
  logo = LOGO;

  appPages = [
    { title: 'Inicio', url: '', icon: '../../../assets/prueba 1Recurso 29.png', route: 0 },
    { title: 'Rutas', url: '', icon: '../../../assets/prueba 1Recurso 30.png', route: 1 },
    { title: 'Experiencia', url: '', icon: '../../../assets/prueba 1Recurso 31.png', route: 2 },
    { title: 'Soporte/Ayuda', url: '/sidemenu/Soporte', icon: '../../../assets/prueba 1Recurso 32.png', route: 3 }
  ];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private userService: UserService,
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
    this._storage.get( USER ).then( ( user: any ) => {
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
    this.userService.flowSubject( p.route );
    this.activeRoute = i;
    this.drawerVar = p.title;
    if ( p.url ) {
      this.router.navigate( [ p.url ] );
    }
  }

}
